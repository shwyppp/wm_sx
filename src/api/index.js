// 包含n个接口请求函数的模块
//函数返回值 ： promise

import ajax from './ajax'

//1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/$(geohash)')
//2.获取食品分类列表
export const reqFoodType = () => ajax('/index_category')
//3.获取商家列表
export const reqShops = (latitude,longitude) => ajax('/shops',{latitude,longitude})
