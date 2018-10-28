const recursion = (function(){
	let res = [];
	return function(obj){
		let level = [];
		let childs = [];
		Object.values(obj).forEach(item => {
			if(typeof item === 'number') level.push(item);
			else childs.push(...Object.values(item));
        });
		res.push(level);
        if(childs.length>0) recursion(childs);
        return res;
    }
})();