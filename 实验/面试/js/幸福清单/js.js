;(function(){
    window.local = {
        // 这是想浏览器中添加数据
        set(key,value){
            return localStorage.setItem(key,value)
        },
        // 这是获取到浏览器中的数据
        get(key){
            return localStorage.getItem(key)
        },
        //这是删除指定key的值
        remove(key){
            return localStorage.removeItem(key)
        },
        // 这是删除所有的值
        clear(){
            return localStorage.clear()
        }
    }

})()