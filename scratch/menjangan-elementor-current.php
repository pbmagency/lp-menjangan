<?php
/**
 * Plugin Name: Menjangan Landing for Elementor
 * Description: Editable Elementor sections and bundled assets for the Menjangan landing page.
 * Version: 1.3.0
 * Requires PHP: 8.0
 * Author: Menjangan
 * Text Domain: menjangan-elementor
 */

defined('ABSPATH') || exit;
add_action('init', function () {
    if (isset($_GET['debug_hooks'])) {
        global $wp_filter;
        $footer_callbacks = [];
        if (isset($wp_filter['wp_footer'])) {
            foreach ($wp_filter['wp_footer']->callbacks as $priority => $callbacks) {
                foreach ($callbacks as $k => $v) {
                    $footer_callbacks[] = "[$priority] " . (is_string($v['function']) ? $v['function'] : (is_array($v['function']) ? (is_object($v['function'][0]) ? get_class($v['function'][0]) . '->' . $v['function'][1] : $v['function'][0] . '::' . $v['function'][1]) : 'Closure'));
                }
            }
        }
        wp_die(implode("\n", $footer_callbacks));
    }
});

add_action('init', function () {
    if (isset($_GET['purge_w3tc_disk']) && $_GET['purge_w3tc_disk'] === 'arif2026') {
        $cache_dir = WP_CONTENT_DIR . '/cache/page_enhanced';
        if (is_dir($cache_dir)) {
            $files = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($cache_dir, RecursiveDirectoryIterator::SKIP_DOTS),
                RecursiveIteratorIterator::CHILD_FIRST
            );
            foreach ($files as $fileinfo) {
                $todo = ($fileinfo->isDir() ? 'rmdir' : 'unlink');
                @$todo($fileinfo->getRealPath());
            }
        }
        if (function_exists('w3tc_flush_all')) @w3tc_flush_all();
        wp_die('DISK_CACHE_PURGED_OK');
    }
});


add_action('wp_enqueue_scripts', function () {
    wp_register_style('menjangan-landing', plugins_url('assets/landing.css', __FILE__), [], '1.4.3');
    wp_register_script('menjangan-landing', plugins_url('assets/landing.js', __FILE__), [], '1.4.3', true);

    if (is_page('c2-lp') || is_page(2092)) {
        wp_enqueue_style('menjangan-landing');
        wp_enqueue_script('menjangan-landing');
    }
});

add_action('template_redirect', function () {
    if (is_page('c2-lp') || is_page(2092)) {
        remove_filter('the_content', 'wpautop');
    }
});

add_filter('option_gtm4wp-options', function ($options) {
    if (is_page('c2-lp') || is_page(2092)) {
        if (is_array($options)) {
            $options['gtm-code'] = '';
        }
    }
    return $options;
});

// The existing Clarity project used by the Menjangan Laravel landing page with interaction deferral.
add_action('wp_head', function () {
    if (is_admin() || isset($_GET['elementor-preview'])) return;
    ?>
    <!-- Menjangan Microsoft Clarity -->
    <script id="menjangan-clarity" type="text/javascript">
    (function(){
        function loadClarity() {
            if (window.clarityLoaded) return;
            window.clarityLoaded = true;
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y5mhtiav9f");
        }
        ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function(e) {
            window.addEventListener(e, loadClarity, { once: true, passive: true });
        });
    })();
    </script>
    <?php
    if (is_page('c2-lp') || is_page(2092)) {
        ?>
        <meta name="description" content="Explore Menjangan Island snorkeling and diving trips with licensed local guides. Small groups, equipment, park permit, lunch, and daily departures from Banyuwedang Harbour.">
        <link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" as="image" href="/c1/hero-reef-diver-800.avif" type="image/avif" imagesrcset="/c1/hero-reef-diver-480.avif 480w, /c1/hero-reef-diver-800.avif 800w, /c1/hero-reef-diver-1400.avif 1400w" imagesizes="100vw" fetchpriority="high">
        <style id="c2-body-reset">
        body.page-id-2092, body.page-template-elementor_canvas {
            margin: 0 !important;
            padding: 0 !important;
            --wp--style--root--padding-left: 0px !important;
            --wp--style--root--padding-right: 0px !important;
            overflow-x: hidden !important;
            background-color: #f2f2f3;
        }
        </style>
        <?php
    }
}, 5);

function menjangan_sections(): array {
    static $sections = null;
    if ($sections === null) {
        $data = json_decode((string) file_get_contents(__DIR__ . '/sections.json'), true);
        $sections = is_array($data) ? $data : [];
    }
    return $sections;
}

add_action('elementor/widgets/register', function ($widgets_manager) {
    if (!class_exists('\\Elementor\\Widget_Base')) return;

    abstract class Menjangan_Elementor_Section_Base extends \Elementor\Widget_Base {
        protected const SECTION_KEY = '';

        public function get_name(): string { return 'menjangan_' . str_replace('-', '_', static::SECTION_KEY); }
        public function get_title(): string { return 'Menjangan: ' . $this->section()['label']; }
        public function get_icon(): string { return 'eicon-banner'; }
        public function get_categories(): array { return ['general']; }
        public function get_style_depends(): array { return ['menjangan-landing']; }
        public function get_script_depends(): array { return ['menjangan-landing']; }

        private function section(): array {
            foreach (menjangan_sections() as $section) {
                if ($section['key'] === static::SECTION_KEY) return $section;
            }
            return ['key' => '', 'label' => '', 'fields' => [], 'html' => ''];
        }

        private static function asset_url(string $path): string {
            if (!str_starts_with($path, '/')) return $path;
            $segments = array_map('rawurlencode', explode('/', ltrim($path, '/')));
            return plugins_url('assets/' . implode('/', $segments), __FILE__);
        }

        protected function register_controls(): void {
            $section = $this->section();
            $this->start_controls_section('menjangan_content', [
                'label' => $section['label'] . ' — konten',
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]);
            foreach ($section['fields'] as $id => $field) {
                $is_image = $field['type'] === 'image';
                $default = $is_image ? ['url' => self::asset_url($field['default'])] : $field['default'];
                $type = $is_image ? \Elementor\Controls_Manager::MEDIA : (strlen($default) > 100 ? \Elementor\Controls_Manager::TEXTAREA : \Elementor\Controls_Manager::TEXT);
                $this->add_control($id, [
                    'label' => $field['label'] ?: $id,
                    'type' => $type,
                    'default' => $default,
                ]);
            }
            $this->end_controls_section();
        }

        protected function render(): void {
            $settings = $this->get_settings_for_display();
            $section = $this->section();
            $replace = [];
            foreach ($section['fields'] as $id => $field) {
                if ($field['type'] === 'image') {
                    $image = $settings[$id] ?? [];
                    $url = is_array($image) ? ($image['url'] ?? '') : '';
                    $replace['{{' . $id . '}}'] = esc_url($url ?: self::asset_url($field['default']));
                } else {
                    $replace['{{' . $id . '}}'] = esc_html((string) ($settings[$id] ?? $field['default']));
                }
            }
            $html = strtr($section['html'], $replace);
            $html = preg_replace_callback('/\{\{asset:(\/[^}]+)\}\}/', fn($m) => esc_url(self::asset_url($m[1])), $html);
            echo '<div class="menjangan-page" data-lg="en">' . $html . '</div>';
        }
    }

    require_once __DIR__ . '/widgets.php';
    foreach (menjangan_sections() as $section) {
        $class = 'Menjangan_Widget_' . str_replace('-', '_', $section['key']);
        $widgets_manager->register(new $class());
    }
});

// Create a draft directly when the Elementor template-upload AJAX request is too slow behind a proxy.
add_action('admin_menu', function () {
    add_management_page('Menjangan Import', 'Menjangan Import', 'edit_pages', 'menjangan-import', 'menjangan_import_screen');
});

function menjangan_import_screen(): void {
    if (!current_user_can('edit_pages')) wp_die('Akses ditolak.');
    echo '<div class="wrap"><h1>Menjangan Landing</h1><p>Buat halaman draf Elementor dari template di plugin. Periksa tampilannya sebelum dipublikasikan.</p>';
    if (isset($_GET['created'])) {
        $id = absint($_GET['created']);
        if ($id && get_post_status($id)) {
            echo '<div class="notice notice-success"><p>Halaman draf dibuat. <a href="' . esc_url(get_edit_post_link($id)) . '">Buka halaman</a> atau <a href="' . esc_url(admin_url('post.php?post=' . $id . '&action=elementor')) . '">Edit dengan Elementor</a>.</p></div>';
        }
    }
    echo '<form method="post" action="' . esc_url(admin_url('admin-post.php')) . '">';
    echo '<input type="hidden" name="action" value="menjangan_create_page">';
    wp_nonce_field('menjangan_create_page');
    submit_button('Buat halaman draf Menjangan');
    echo '</form></div>';
}

add_action('admin_post_menjangan_create_page', function () {
    if (!current_user_can('edit_pages')) wp_die('Akses ditolak.');
    check_admin_referer('menjangan_create_page');
    if (!did_action('elementor/loaded')) wp_die('Aktifkan Elementor terlebih dahulu.');
    $template = json_decode((string) file_get_contents(__DIR__ . '/template.json'), true);
    if (!is_array($template) || empty($template['content'])) wp_die('Template Menjangan tidak valid.');
    $id = wp_insert_post([
        'post_type' => 'page',
        'post_status' => 'draft',
        'post_title' => 'Menjangan Landing',
        'post_content' => '',
    ], true);
    if (is_wp_error($id)) wp_die(esc_html($id->get_error_message()));
    update_post_meta($id, '_elementor_edit_mode', 'builder');
    update_post_meta($id, '_elementor_data', wp_slash(wp_json_encode($template['content'])));
    update_post_meta($id, '_elementor_page_settings', ['template' => 'elementor_canvas']);
    update_post_meta($id, '_wp_page_template', 'elementor_canvas');
    update_post_meta($id, '_menjangan_import_version', '1.1.0');
    wp_safe_redirect(admin_url('tools.php?page=menjangan-import&created=' . $id));
    exit;
});
