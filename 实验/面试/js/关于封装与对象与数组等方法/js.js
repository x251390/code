;(function(){
            window.local = {
                //设置本地储存 
                set(key,value){
                  return localStorage.setItem(key,value)
                },
                // 获取本地储存的数据
                get(key){
                    return window.localStorage.getItem(key)
                },
                // 删除某一个指定的储存
                remove(key){
                   return window.localStorage.removeItem(key)
                },
                //删除所有
                clear(){
                    return window.localStorage.clear()
                } 
            } 
    }
)()