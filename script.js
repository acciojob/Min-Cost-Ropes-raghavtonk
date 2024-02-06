function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length<2){
		return 0;
	}
	arr.sort(function(a,b){return a-b});
	let totalcost = 0;
	while(arr.length >1){
		let rope1 = arr.shift();
		let rope2 = arr.shift();

		let cost = rope1 + rope2;
		totalcost+=cost;
		arr.push(cost);
		arr.sort(function(a,b){return a-b})
	}
	return totalcost;
}

module.exports=mincost;
