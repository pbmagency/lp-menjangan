import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
export const feed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: feed.url(options),
    method: 'get',
})

feed.definition = {
    methods: ["get","head"],
    url: '/api/analytics/feed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
feed.url = (options?: RouteQueryOptions) => {
    return feed.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
feed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: feed.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
feed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: feed.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
    const feedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: feed.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
        feedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: feed.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\AnalyticsFeedController::feed
 * @see app/Http/Controllers/Api/AnalyticsFeedController.php:21
 * @route '/api/analytics/feed'
 */
        feedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: feed.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    feed.form = feedForm
const AnalyticsFeedController = { feed }

export default AnalyticsFeedController