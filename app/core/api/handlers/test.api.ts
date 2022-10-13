/**
 * 详细接口类型定义在: @/typescript/api-interface/*
 */

/**
 * 测试接口
 * @param params
 * @param options
 */
export function queryTestInfo(
  params?: queryTestInfoUsingGET.Params,
  options?: RequestOptions
): Promise<queryTestInfoUsingGET.Response> {
  return $api.request('/api-test/demo-test', params, options)
}

/**
 * 测试接口-返回错误
 * @param params
 * @param options
 */
export function queryTestInfoError(
  params?: queryTestInfoUsingGET.Params,
  options?: RequestOptions
): Promise<queryTestInfoUsingGET.Response> {
  return $api.request('/api-test/demo-test-error', params, options)
}

export function queryList(
  params?: Record<string, any>,
  options?: RequestOptions
): Promise<{ id: number; col1: string; col2: string; col3: string }[]> {
  return $api.request('/api-test/test-list', params, options).then((res) => res.data || [])
}
