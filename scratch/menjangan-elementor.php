&lt;?php
/**
 * Plugin Name: Menjangan Landing for Elementor
 * Description: Editable Elementor sections and bundled assets for the Menjangan landing page.
 * Version: 1.3.0
 * Requires PHP: 8.0
 * Author: Menjangan
 * Text Domain: menjangan-elementor
 */

defined(&#039;ABSPATH&#039;) || exit;

add_action(&#039;wp_enqueue_scripts&#039;, function () {
    wp_register_style(&#039;menjangan-landing&#039;, plugins_url(&#039;assets/landing.css&#039;, __FILE__), [], &#039;1.3.0&#039;);
    wp_register_script(&#039;menjangan-landing&#039;, plugins_url(&#039;assets/landing.js&#039;, __FILE__), [], &#039;1.3.0&#039;, true);
});

// The existing Clarity project used by the Menjangan Laravel landing page.
add_action(&#039;wp_head&#039;, function () {
    if (is_admin() || isset($_GET[&#039;elementor-preview&#039;])) return;
    ?&gt;
    &lt;!-- Menjangan Microsoft Clarity --&gt;
    &lt;script id=&quot;menjangan-clarity&quot; type=&quot;text/javascript&quot;&gt;
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src=&quot;https://www.clarity.ms/tag/&quot;+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, &quot;clarity&quot;, &quot;script&quot;, &quot;y5mhtiav9f&quot;);
    &lt;/script&gt;
    &lt;?php
}, 5);

function menjangan_sections(): array {
    static $sections = null;
    if ($sections === null) {
        $data = json_decode((string) file_get_contents(__DIR__ . &#039;/sections.json&#039;), true);
        $sections = is_array($data) ? $data : [];
    }
    return $sections;
}

add_action(&#039;elementor/widgets/register&#039;, function ($widgets_manager) {
    if (!class_exists(&#039;\\Elementor\\Widget_Base&#039;)) return;

    abstract class Menjangan_Elementor_Section_Base extends \Elementor\Widget_Base {
        protected const SECTION_KEY = &#039;&#039;;

        public function get_name(): string { return &#039;menjangan_&#039; . str_replace(&#039;-&#039;, &#039;_&#039;, static::SECTION_KEY); }
        public function get_title(): string { return &#039;Menjangan: &#039; . $this-&gt;section()[&#039;label&#039;]; }
        public function get_icon(): string { return &#039;eicon-banner&#039;; }
        public function get_categories(): array { return [&#039;general&#039;]; }
        public function get_style_depends(): array { return [&#039;menjangan-landing&#039;]; }
        public function get_script_depends(): array { return [&#039;menjangan-landing&#039;]; }

        private function section(): array {
            foreach (menjangan_sections() as $section) {
                if ($section[&#039;key&#039;] === static::SECTION_KEY) return $section;
            }
            return [&#039;key&#039; =&gt; &#039;&#039;, &#039;label&#039; =&gt; &#039;&#039;, &#039;fields&#039; =&gt; [], &#039;html&#039; =&gt; &#039;&#039;];
        }

        private static function asset_url(string $path): string {
            if (!str_starts_with($path, &#039;/&#039;)) return $path;
            $segments = array_map(&#039;rawurlencode&#039;, explode(&#039;/&#039;, ltrim($path, &#039;/&#039;)));
            return plugins_url(&#039;assets/&#039; . implode(&#039;/&#039;, $segments), __FILE__);
        }

        protected function register_controls(): void {
            $section = $this-&gt;section();
            $this-&gt;start_controls_section(&#039;menjangan_content&#039;, [
                &#039;label&#039; =&gt; $section[&#039;label&#039;] . &#039; — konten&#039;,
                &#039;tab&#039; =&gt; \Elementor\Controls_Manager::TAB_CONTENT,
            ]);
            foreach ($section[&#039;fields&#039;] as $id =&gt; $field) {
                $is_image = $field[&#039;type&#039;] === &#039;image&#039;;
                $default = $is_image ? [&#039;url&#039; =&gt; self::asset_url($field[&#039;default&#039;])] : $field[&#039;default&#039;];
                $type = $is_image ? \Elementor\Controls_Manager::MEDIA : (strlen($default) &gt; 100 ? \Elementor\Controls_Manager::TEXTAREA : \Elementor\Controls_Manager::TEXT);
                $this-&gt;add_control($id, [
                    &#039;label&#039; =&gt; $field[&#039;label&#039;] ?: $id,
                    &#039;type&#039; =&gt; $type,
                    &#039;default&#039; =&gt; $default,
                ]);
            }
            $this-&gt;end_controls_section();
        }

        protected function render(): void {
            $settings = $this-&gt;get_settings_for_display();
            $section = $this-&gt;section();
            $replace = [];
            foreach ($section[&#039;fields&#039;] as $id =&gt; $field) {
                if ($field[&#039;type&#039;] === &#039;image&#039;) {
                    $image = $settings[$id] ?? [];
                    $url = is_array($image) ? ($image[&#039;url&#039;] ?? &#039;&#039;) : &#039;&#039;;
                    $replace[&#039;{{&#039; . $id . &#039;}}&#039;] = esc_url($url ?: self::asset_url($field[&#039;default&#039;]));
                } else {
                    $replace[&#039;{{&#039; . $id . &#039;}}&#039;] = esc_html((string) ($settings[$id] ?? $field[&#039;default&#039;]));
                }
            }
            $html = strtr($section[&#039;html&#039;], $replace);
            $html = preg_replace_callback(&#039;/\{\{asset:(\/[^}]+)\}\}/&#039;, fn($m) =&gt; esc_url(self::asset_url($m[1])), $html);
            echo &#039;&lt;div class=&quot;menjangan-page&quot; data-lg=&quot;en&quot;&gt;&#039; . $html . &#039;&lt;/div&gt;&#039;;
        }
    }

    require_once __DIR__ . &#039;/widgets.php&#039;;
    foreach (menjangan_sections() as $section) {
        $class = &#039;Menjangan_Widget_&#039; . str_replace(&#039;-&#039;, &#039;_&#039;, $section[&#039;key&#039;]);
        $widgets_manager-&gt;register(new $class());
    }
});

// Create a draft directly when the Elementor template-upload AJAX request is too slow behind a proxy.
add_action(&#039;admin_menu&#039;, function () {
    add_management_page(&#039;Menjangan Import&#039;, &#039;Menjangan Import&#039;, &#039;edit_pages&#039;, &#039;menjangan-import&#039;, &#039;menjangan_import_screen&#039;);
});

function menjangan_import_screen(): void {
    if (!current_user_can(&#039;edit_pages&#039;)) wp_die(&#039;Akses ditolak.&#039;);
    echo &#039;&lt;div class=&quot;wrap&quot;&gt;&lt;h1&gt;Menjangan Landing&lt;/h1&gt;&lt;p&gt;Buat halaman draf Elementor dari template di plugin. Periksa tampilannya sebelum dipublikasikan.&lt;/p&gt;&#039;;
    if (isset($_GET[&#039;created&#039;])) {
        $id = absint($_GET[&#039;created&#039;]);
        if ($id &amp;&amp; get_post_status($id)) {
            echo &#039;&lt;div class=&quot;notice notice-success&quot;&gt;&lt;p&gt;Halaman draf dibuat. &lt;a href=&quot;&#039; . esc_url(get_edit_post_link($id)) . &#039;&quot;&gt;Buka halaman&lt;/a&gt; atau &lt;a href=&quot;&#039; . esc_url(admin_url(&#039;post.php?post=&#039; . $id . &#039;&amp;action=elementor&#039;)) . &#039;&quot;&gt;Edit dengan Elementor&lt;/a&gt;.&lt;/p&gt;&lt;/div&gt;&#039;;
        }
    }
    echo &#039;&lt;form method=&quot;post&quot; action=&quot;&#039; . esc_url(admin_url(&#039;admin-post.php&#039;)) . &#039;&quot;&gt;&#039;;
    echo &#039;&lt;input type=&quot;hidden&quot; name=&quot;action&quot; value=&quot;menjangan_create_page&quot;&gt;&#039;;
    wp_nonce_field(&#039;menjangan_create_page&#039;);
    submit_button(&#039;Buat halaman draf Menjangan&#039;);
    echo &#039;&lt;/form&gt;&lt;/div&gt;&#039;;
}

add_action(&#039;admin_post_menjangan_create_page&#039;, function () {
    if (!current_user_can(&#039;edit_pages&#039;)) wp_die(&#039;Akses ditolak.&#039;);
    check_admin_referer(&#039;menjangan_create_page&#039;);
    if (!did_action(&#039;elementor/loaded&#039;)) wp_die(&#039;Aktifkan Elementor terlebih dahulu.&#039;);
    $template = json_decode((string) file_get_contents(__DIR__ . &#039;/template.json&#039;), true);
    if (!is_array($template) || empty($template[&#039;content&#039;])) wp_die(&#039;Template Menjangan tidak valid.&#039;);
    $id = wp_insert_post([
        &#039;post_type&#039; =&gt; &#039;page&#039;,
        &#039;post_status&#039; =&gt; &#039;draft&#039;,
        &#039;post_title&#039; =&gt; &#039;Menjangan Landing&#039;,
        &#039;post_content&#039; =&gt; &#039;&#039;,
    ], true);
    if (is_wp_error($id)) wp_die(esc_html($id-&gt;get_error_message()));
    update_post_meta($id, &#039;_elementor_edit_mode&#039;, &#039;builder&#039;);
    update_post_meta($id, &#039;_elementor_data&#039;, wp_slash(wp_json_encode($template[&#039;content&#039;])));
    update_post_meta($id, &#039;_elementor_page_settings&#039;, [&#039;template&#039; =&gt; &#039;elementor_canvas&#039;]);
    update_post_meta($id, &#039;_wp_page_template&#039;, &#039;elementor_canvas&#039;);
    update_post_meta($id, &#039;_menjangan_import_version&#039;, &#039;1.1.0&#039;);
    wp_safe_redirect(admin_url(&#039;tools.php?page=menjangan-import&amp;created=&#039; . $id));
    exit;
});
