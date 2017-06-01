
var myApp=angular.module('myApp',[]);

myApp.controller('controller01', ['$scope','$http',function($scope,$http){

	$scope.book=[
		{id:1,bookName:'海底两万里',author:'儒勒·凡尔纳',price:'78.00',edit:'编辑',delete:'删除'},
		{id:2,bookName:'平凡的世界',author:'路遥',price:'52.00',edit:'编辑',delete:'删除'},
		{id:3,bookName:'围城',author:'钱钟书',price:'99.00',edit:'编辑',delete:'删除'},
		{id:4,bookName:'挪威的森林',author:'村上春树',price:'38.50',edit:'编辑',delete:'删除'},
		{id:5,bookName:'尘埃落定',author:'阿来',price:'27.60',edit:'编辑',delete:'删除'}
	];
	$scope.searchMethod='检索方式';
	$scope.cs1="id";
	$scope.bool=false;
	$scope.bool2=false;
	$scope.boo=false;
		
	$scope.addBook=function(key,j){
		if(key==1){	
			$scope.bool2=true;
			$scope.title01='请填写书籍详细信息';
			$scope.cancle='关闭';
			$scope.OK='提交';
			this.deliver=function(){
				var obj1={
					id:this.book.length+1,
					bookName:this.na1,
					author:this.au1,
					price:this.pr1
				}
				this.book.push(obj1);	
			};
		};
		if(key==2){
			$scope.bool2=false;
			$scope.title01='确认删除《'+this.book[j-1].bookName+'》吗？';
			$scope.cancle='取消';
			$scope.OK='确认';
			$scope.deliver=function(){
				// this.book.splice(j-1,1,"");
				delete this.book[j-1]
			}
		};
		if(key==3){
			$scope.bool2=true;
			$scope.title01='请修改书籍信息'; 
			$scope.cancle='取消';
			$scope.OK='修改';
			$scope.na1=this.book[j-1].bookName;
			$scope.au1=this.book[j-1].author;
			$scope.pr1=this.book[j-1].price;
			$scope.deliver=function(){
				var obj2={
					id:j,
					bookName:this.na1,
					author:this.au1,
					price:this.pr1
				}
				this.book.splice(j-1,1,obj2);
			}
		};
		
	}

	$scope.search=function(method){
			var chans={
				bookName:'书名检索',
				author:'作者检索',
				id:'序号检索'
			};
			this.cs1=method;
			this.searchMethod=chans[method];
	};

	$scope.fn=function(cs1){
			var obj={};
			obj[cs1]=this.val;
			return obj;
		
	};
	$scope.order=function(cs2){
			this.sx=cs2;
			this.bool=!this.bool;
			this.boo=!this.boo;		
	};

	$scope.close=function(){
			this.na1="";
			this.au1="";
			this.pr1="";		
	};
	
}]);












