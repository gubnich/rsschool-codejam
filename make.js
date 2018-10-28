const make = (function(){	
	let mem = [];
	return function make(arg){
		if(typeof arg === 'function') {
			let arr = [...mem];
			mem = [];
			return arr.reduce((acc,item) => arg(acc,item));
        }
		else {
			mem.push(...arguments);
			return make;
        }
    }
})();