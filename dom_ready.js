var N = window.N || {};
;(function(N){
    var doc = document;
    var isReady = false;
    var readyCbList = [];
    function domContentLoadedFn(){
        isReady = true;
        doc.removeEventListener('DOMContentLoaded',domContentLoadedFn,false);        
        var fireFn;
        while(fireFn = readyCbList.shift()){
            fireFn(N);
        }
    }
    N.ready = function(cb){
        if(isReady || doc.readyState === "complete"){
            return cb(N);
        }
        readyCbList.push(cb);
        doc.addEventListener('DOMContentLoaded',domContentLoadedFn,false);
    }
})(N);