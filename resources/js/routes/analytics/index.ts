import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
export const csrf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csrf.url(options),
    method: 'get',
})

csrf.definition = {
    methods: ["get","head"],
    url: '/analytics/csrf',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
csrf.url = (options?: RouteQueryOptions) => {
    return csrf.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
csrf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: csrf.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
csrf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: csrf.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
    const csrfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: csrf.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
        csrfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: csrf.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:13
 * @route '/analytics/csrf'
 */
        csrfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: csrf.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    csrf.form = csrfForm
/**
* @see \App\Http\Controllers\AnalyticsController::track
 * @see app/Http/Controllers/AnalyticsController.php:40
 * @route '/analytics/track'
 */
export const track = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(options),
    method: 'post',
})

track.definition = {
    methods: ["post"],
    url: '/analytics/track',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AnalyticsController::track
 * @see app/Http/Controllers/AnalyticsController.php:40
 * @route '/analytics/track'
 */
track.url = (options?: RouteQueryOptions) => {
    return track.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AnalyticsController::track
 * @see app/Http/Controllers/AnalyticsController.php:40
 * @route '/analytics/track'
 */
track.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: track.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AnalyticsController::track
 * @see app/Http/Controllers/AnalyticsController.php:40
 * @route '/analytics/track'
 */
    const trackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: track.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AnalyticsController::track
 * @see app/Http/Controllers/AnalyticsController.php:40
 * @route '/analytics/track'
 */
        trackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: track.url(options),
            method: 'post',
        })
    
    track.form = trackForm
const analytics = {
    csrf: Object.assign(csrf, csrf),
track: Object.assign(track, track),
}

export default analytics