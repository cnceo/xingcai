// 彩票开奖配置															
var moment = require("moment");																					


var cp=[																										//
	{                                                                                                           //
		title:'360彩票重庆时时彩',                                                                              //
		source:'360彩票',                                                                                		//
		name:'cqssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'cqssc1',                                                                                          //
		option:{                                                                                                //
			host:"520.ag",                                                                                   //
			timeout:50000,                                                                                      //重
			path: '/xml/cqssc',                                                                       //庆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:1,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票重庆时时彩解析数据不正确');                                               //
			}                                                                                                   //
		}                                                                                                       //
	},	 
	{                                                                                                           //
		title:'新疆时时彩',                                                                           	    	//
		source:'新疆福彩网',                                                                                 	//
		name:'xjssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'xjssc',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //新
			path: '/xml/xjssc.php',                                                                       	//疆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:12,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------新疆福利彩票解析数据不正确');                                                    //
			}                                                                                                   //
		}                                                                                                       //新
	},	
	{                                                                                                           //
		title:'天津时时彩',                                                                           	    	//
		source:'天津福利彩票网',                                                                                //
		name:'tjssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'tjssc',                                                                                          //
		option:{                                                                                                //
			host:"520.ag",                                                                                   //天
			timeout:50000,                                                                                      //津
			path: '/xml/tjssc',                                                                 		    //时
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //彩
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:60,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //天
				}					                                                                            //津
			}catch(err){                                                                                        //时
				throw('--------天津时时彩解析数据不正确');                                                      //时
			}                                                                                                   //彩
		}                                                                                                       //
	},	    
	
	{                                                                                                           //
		title:'彩88广东11选5',                                                                                  //广
		source:'广东11选5彩88',                                                                                 //东
		name:'gd11',                                                                                            //11
		enable:true,                                                                                            //选
		timer:'gd11',                                                                                           //5
		option:{                                                                                                //
			host:"520.ag",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/gd11x5',                                                                      //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:6,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //广
				throw('--------彩88广东11选5解析数据不正确');                                                   //东
			}                                                                                                   //11
		}                                                                                                       //选
    },                    
		{                                                                                                           //
		title:'360彩票山东11选5',                                                                               //
		source:'360彩票',                                                                                	    //
		name:'sd11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sd11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/sd115_360.php',                                                                        //山
			headers:{                                                                                           //东
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //11
			}                                                                                                   //选
		},                                                                                                      //5
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:7,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票山东11选5解析数据不正确');                                                //
			}                                                                                                   //
		}                                                                                                       //
	},	 
	
	{                                                                                                           //
		title:'彩乐乐山东11选5',                                                                                //
		source:'彩乐乐',                                                                            		    //
		name:'sd11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sd11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //山
			path: '/xml/sd115_cle.php',                                                                   	    //东
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:7,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------彩乐乐山东11选5解析数据不正确');                                                 //
			}                                                                                                   //
		}                                                                                                       //
	},	
	{                                                                                                           //
		title:'360彩票江西11选5',                                                                           	//
		source:'360彩票',                                                                                 		//
		name:'jx11',                                                                                            //
		enable:true,                                                                                            //
		timer:'jx11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //江
			path: '/xml/jx115_360.php',                                                                      	//西
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:16,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票江西11选5解析数据不正确');                                                //
			}                                                                                                   //
		}                                                                                                       //江
	},	                                                                                                        //西
                                                                                                                //11
	{                                                                                                           //选
		title:'彩88江西11选5',                                                                              	//5
		source:'彩88',                                                                                			//
		name:'jx11',                                                                                            //
		enable:true,                                                                                            //
		timer:'jx11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/jx115_cai88.php',                                                                      //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:16,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //江
				}					                                                                            //西
			}catch(err){                                                                                        //11
				throw('--------彩88江西11选5解析数据不正确');                                                  	//选
			}                                                                                                   //5
		}                                                                                                       //
	},  
	{                                                                                                           //
		title:'上海11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/xml/sh115_360.php',                                                                        //海
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:15,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票上海11选5解析数据不正确');                                                //
			}                                                                                                   //上
		}                                                                                                       //海
	},
	{                                                                                                           //
		title:'360彩票江苏快3',                                                                           		//
		source:'360彩票',                                                                                 		//
		name:'jsk3',                                                                                            //
		enable:true,                                                                                            //
		timer:'jsk3',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //江
			path: '/xml/jsk3_360.php',                                                                      	//苏
			headers:{                                                                                           //快
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //3
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:79,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票江苏快3解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //江
	},	                                                                                                        //苏
                                                                                                                //快
	{                                                                                                           //3
		title:'163江苏快3',                                                                              		//
		source:'网易163',                                                                                		//
		name:'jsk3',                                                                                            //
		enable:true,                                                                                            //
		timer:'jsk3',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/jsk3_163.php',                                                                         //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:79,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //江
				throw('--------163江苏快3解析数据不正确');                                                  	//苏
			}                                                                                                   //快
		}                                                                                                       //3
	}, 
	
	{                                                                                                           //
		title:'快乐8',                                                                           				//
		source:'北京福利彩票',                                                                                  //
		name:'bjkl8',                                                                                           //
		enable:true,                                                                                            //
		timer:'bjkl8',                                                                                          //
		option:{                                                                                                //北
			host:"520.ag",                                                                                   //京
			timeout:50000,                                                                                      //快
			path: '/xml/bjkl8',                                                                      			//乐
			headers:{                                                                                           //8
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:78,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //快
			}catch(err){                                                                                        //乐
				throw('--------官网快乐8解析数据不正确');                                                	    //8
			}                                                                                                   //
		}                                                                                                       //
	},	
	{                                                                                                                             //
		title:'福彩3D',                                                                                                           //
		source:'S科技',                                                                                                    //
		name:'fc3d',                                                                                                              //
		enable:true,                                                                                                              //
		timer:'fc3d',                                                                                                             //
                                                                                                                                  //
		option:{                                                                                                                  //
			host:"www.500wan.com",                                                                                                //福
			timeout:50000,                                                                                                        //彩
			path: '/static/info/kaijiang/xml/sd/list10.xml',                                                                      //3D
			headers:{                                                                                                             //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"                                                //
			}                                                                                                                     //
		},                                                                                                                        //
		                                                                                                                          //
		parse:function(str){                                                                                                      //
			try{                                                                                                                  //
				str=str.substr(0,300);                                                                                            //
				var m;                                                                                                            //
				var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)" trycode="[\d\,]*?" tryinfo="" \/>/;  //
                                                                                                                                  //
				if(m=str.match(reg)){                                                                                             //
					return {                                                                                                      //
						type:9,                                                                                                   //
						time:m[3],                                                                                                //
						number:m[1],                                                                                              //
						data:m[2]                                                                                                 //
					};                                                                                                            //
				}                                                                                                                 //
			}catch(err){                                                                                                          //
				throw('福彩3D解析数据不正确');                                                                                    //
			}                                                                                                                     //
		}                                                                                                                         //
	},
	{                                                                                                                             //
		title:'排列3',                                                                                                            //排
		source:'S科技',                                                                                                    //列
		name:'pl3',                                                                                                              //3
		enable:true,                                                                                                              //
		timer:'pl3',                                                                                                             //
                                                                                                                                  //
		option:{                                                                                                                  //
			host:"www.500wan.com",                                                                                                //
			timeout:50000,                                                                                                        //
			path: '/static/info/kaijiang/xml/pls/list10.xml',                                                                     //
			headers:{                                                                                                             //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"                                                //
			}                                                                                                                     //
		},                                                                                                                        //
		                                                                                                                          //
		parse:function(str){                                                                                                      //
			try{                                                                                                                  //
				str=str.substr(0,300);                                                                                            //
				var m;	                                                                                                          //
				var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;                                    //
				if(m=str.match(reg)){                                                                                             //
					return {                                                                                                      //
						type:10,                                                                                                  //
						time:m[3],                                                                                                //
						number:20+m[1],                                                                                           //
						data:m[2]                                                                                                 //
					};                                                                                                            //
				}                                                                                                                 //
			}catch(err){                                                                                                          //
				throw('排3解析数据不正确');                                                                                       //
			}                                                                                                                     //
		}                                                                                                                         //
	},
	{                                                                                                         	//
		title:'澳门时时彩',                                                                                   	//
		source:'KK',                                                                                        	//
		name:'amssc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amssc',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcamssc',                                                               	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//杏
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//彩
				var m;                                                                                        	//系
				if(m=str.match(reg)){                                                                         	//统
					return {                                                                                  	//彩
						type:61,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门时时彩解析数据不正确');                                                            	//
			}                                                                                                 	//
		}                                                                                                     	//
	},                                                                                                        	//
																												//
	{                                                                                                         	//
		title:'台湾时时彩',                                                                                   	//
		source:'KK',                                                                                        	//
		name:'twssc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twssc',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctwssc',                                                               	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//杏
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//系
						type:62,                                                                              	//统
						time:m[3],                                                                            	//彩
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾时时彩解析数据不正确');                                                            	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	
	{
        title: '腾讯时时彩',
        source: '腾讯时时彩',
        name: 'ffc',
        enable: true,
        type_id:5,
        timer: 'ffc',
        option: {
            host: "www.77tj.org",
            timeout: 5000,
            path: '/api/tencent/onlineim',
            headers: {
                "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
            }
        },
        parse: function (str) {
            try {
                var tmp = JSON.parse(str);
                tmp = tmp[0];
                var time = tmp.onlinetime;
                //每分钟第10秒的数据
                var code = tmp.onlinenumber.toString();

                var codes = code.split('');
                var open_code = [];
                var num1 = 0;
                var codesCount = codes.length;
                codes.forEach(function (item) {
                    num1 += parseInt(item);
                });
                //总和
                num1 = num1.toString();
                //1,获取采集数据的最后一位数
                open_code.push(num1.substr(num1.length - 1, 1));
                //2-5，中间三位数
                open_code.push(codes[codesCount - 4]);
                open_code.push(codes[codesCount - 3]);
                open_code.push(codes[codesCount - 2]);
                open_code.push(codes[codesCount - 1]);
                var timeToday = moment().format("YYYY-MM-DD 00:01:00");//今日0点
                var timeSs = (Date.parse(time) - Date.parse(timeToday)) / 1000;
                var qCount = Math.floor(timeSs / 60) + 1;
                var lastQH = (qCount + 10000).toString();
                lastQH = lastQH.substr(1, lastQH.length - 1);
				console.log("spider get success");
				//TODO
				//open_code=[8,3,7,4,7];
                return {
                    type: this.type_id,
                    time: Date.parse(time),
                    number: moment().format("YYYYMMDD-") + lastQH,
                    data: open_code.join(",")
                };
            } catch (err) {
                throw(this.title, err);
            }
        }
    },
	
	{                                                                                                         	//
		title:'澳门快乐8',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'amkl8',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amkl8',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcamkl8',                                                               	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//杏
			try{                                                                                              	//彩
				str=str.substr(0,200);	                                                                      	//系
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//统
				var m;                                                                                        	//彩
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:73,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门快乐8解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'韩国快乐8',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'hgkl8',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'hgkl8',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xchgkl8',                                                               	//杏
			headers:{                                                                                         	//彩
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//系
			}                                                                                                 	//统
		},                                                                                                    	//彩
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:74,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('韩国快乐8解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},  
	{                                                                                                         	//
		title:'澳门pk10',                                                                                     	//
		source:'KK',                                                                                        	//杏
		name:'ampk10',                                                                                         	//彩
		enable:true,                                                                                          	//系
		timer:'ampk10',                                                                                        	//统
		option:{                                                                                              	//彩
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcampk10',                                                              	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:65,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//杏
						data:m[2]                                                                             	//彩
					};                                                                                        	//系
				}					                                                                          	//统
			}catch(err){                                                                                      	//彩
				throw('澳门pk10解析数据不正确');                                                              	//
			}                                                                                                 	//
		}                                                                                                     	//
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'台湾pk10',                                                                                     	//
		source:'KK',                                                                                        	//
		name:'twpk10',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twpk10',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctwpk10',                                                              	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//杏
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//系
						type:66,                                                                              	//统
						time:m[3],                                                                            	//彩
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾pk10解析数据不正确');                                                              	//
			}                                                                                                 	//
		}                                                                                                     	//
	},			                                                                                              	//
																												//
	{                                                                                                         	//
		title:'澳门11选5',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'am11',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'am11',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcam11',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//杏
				var m;                                                                                        	//彩
				if(m=str.match(reg)){                                                                         	//系
					return {                                                                                  	//统
						type:67,                                                                              	//彩
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门11选5解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	{                                                                                                         	//
		title:'台湾11选5',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'tw11',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'tw11',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctw11',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//杏
						type:68,                                                                              	//彩
						time:m[3],                                                                            	//系
						number:m[1],                                                                          	//统
						data:m[2]                                                                             	//彩
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾11选5解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'澳门幸运农场',                                                                                 	//
		source:'KK',                                                                                        	//
		name:'amklsf',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amklsf',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcamklsf',                                                              	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:71,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门幸运农场解析数据不正确');                                                          	//杏
			}                                                                                                 	//彩
		}                                                                                                     	//系
	},
	{                                                                                                         	//
		title:'台湾幸运农场',                                                                                 	//
		source:'KK',                                                                                        	//
		name:'twklsf',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twklsf',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctwklsf',                                                              	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:72,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾幸运农场解析数据不正确');                                                          	//
			}                                                                                                 	//
		}                                                                                                     	//
	},	
	
	/*{                                                                                                           //
		title:'北京pk10',                                                                              			//
		source:'北京福彩网',                                                                                	//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                           //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"127.0.0.1",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/pk10_bjfucai.php',                                                                     //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:20,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //PK
			}catch(err){                                                                                        //拾
				throw('--------北京福彩网pk10解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //
	},    */
	{                                                                                                           //
		title:'北京pk10',                                                                              			//
		source:'北京福彩网',                                                                                	//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                           //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"520.ag",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xml/bjpk10',                                                                     //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:20,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //PK
			}catch(err){                                                                                        //拾
				throw('--------北京福彩网pk10解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //
	},
																												//
	{                                                                                                         	//
		title:'澳门快3',                                                                                      	//
		source:'KK',                                                                                        	//杏
		name:'amk3',                                                                                         	//彩
		enable:true,                                                                                          	//系
		timer:'amk3',                                                                                        	//统
		option:{                                                                                              	//彩
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcamk3',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:63,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门快3解析数据不正确');                                                               	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	{                                                                                                         	//
		title:'台湾快3',                                                                                      	//
		source:'KK',                                                                                        	//
		name:'twk3',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twk3',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctwk3',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//杏
			}                                                                                                 	//彩
		},                                                                                                    	//系
		parse:function(str){                                                                                  	//统
			try{                                                                                              	//彩
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:64,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾快3解析数据不正确');                                                               	//
			}                                                                                                 	//
		}                                                                                                     	//
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'澳门3D',                                                                                       	//
		source:'KK',                                                                                        	//
		name:'am3d',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'am3d',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcam3d',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:69,                                                                              	//杏
						time:m[3],                                                                            	//彩
						number:m[1],                                                                          	//系
						data:m[2]                                                                             	//统
					};                                                                                        	//彩
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('澳门3D解析数据不正确');                                                                	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	{                                                                                                         	//
		title:'台湾3D',                                                                                       	//
		source:'KK',                                                                                        	//
		name:'tw3d',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'tw3d',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xctw3d',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:70,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('台湾3D解析数据不正确');                                                                	//
			}                                                                                                 	//
		}                                                                                                     	//杏
	},		                                                                                                  	//彩
																												//系
	{                                                                                                         	//统
		title:'高速六合彩',                                                                                   	//彩
		source:'KK',                                                                                        	//
		name:'gslhc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'gslhc',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xclhc',                                                                 	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:77,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('高速六合彩解析数据不正确');                                                            	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	{                                                                                                         	//杏
		title:'巴西快乐彩',                                                                                   	//彩
		source:'KK',                                                                                        	//系
		name:'bxklc',                                                                                         	//统
		enable:true,                                                                                          	//彩
		timer:'bxklc',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcbxklc',                                                               	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:75,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('巴西快乐彩解析数据不正确');                                                            	//
			}                                                                                                 	//
		}                                                                                                     	//
	},                                                                                                        	//
																												//
	{                                                                                                         	//
		title:'韩国1.5分彩',                                                                                  	//
		source:'KK',                                                                                        	//
		name:'bx15',                                                                                          	//
		enable:true,                                                                                          	//
		timer:'bx15',                                                                                         	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xcbx15',                                                                	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//杏
				str=str.substr(0,200);	                                                                      	//彩
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//系
				var m;                                                                                        	//统
				if(m=str.match(reg)){                                                                         	//彩
					return {                                                                                  	//
						type:76,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('韩国1.5分彩解析数据不正确');                                                           	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	{                                                                                                         	//
		title:'腾讯5分彩',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'qtllc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'qtllc',                                                                                        	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xc5fc',                                                                 	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:14,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//杏
				throw('腾讯5分彩彩解析数据不正确');                                                             	//彩
			}                                                                                                 	//系
		}                                                                                                     	//统
	},	
	
	/*{                                                                                                         	//
		title:'1分彩',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'lfc',                                                                                           	//
		enable:true,                                                                                          	//
		timer:'lfc',                                                                                          	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xclhc',                                                                 	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:5,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('1分彩解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},*/
																												//
	{                                                                                                         	//
		title:'东京2分彩',                                                                                    	//
		source:'KK',                                                                                        	//
		name:'lfc',                                                                                           	//
		enable:true,                                                                                          	//
		timer:'lfc',                                                                                          	//
		option:{                                                                                              	//
			host:"127.0.0.1",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xc2fc',                                                                 	//
			headers:{                                                                                         	//
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                           	//
			}                                                                                                 	//
		},                                                                                                    	//
		parse:function(str){                                                                                  	//
			try{                                                                                              	//
				str=str.substr(0,200);	                                                                      	//
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;            	//
				var m;                                                                                        	//
				if(m=str.match(reg)){                                                                         	//
					return {                                                                                  	//
						type:26,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('东京2分彩解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},
	
	
	{                                                                                                                                             //
		title: '六合彩',                                                                                                                      //
		source: '9800开奖网',                                                                                                                 //
		name: 'hklhc',                                                                                                                        //
		enable: true,                                                                                                                         //
		timer: 'hklhc',                                                                                                                       //
		stype: 34,                                                                                                                            //
		option: {                                                                                                                             //
			host: "www.9800.com.tw",                                                                                                          //
			timeout: 50000,                                                                                                                   //香
			path: '/html/a6/',                                                                                                                //港
			hhost: "www.9800.com.tw",                                                                                                         //六
			npath: '/html/a6/',                                                                                                               //合
			headers: {                                                                                                                        //彩
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/22.0.1271.64 Safari/537.11"      //
			}                                                                                                                                 //
		},                                                                                                                                    //
		parse: function(str) {                                                                                                                //
			try {                                                                                                                             //
				return getFrom9800(str, 34);                                                                                                  //
			} catch (err) {}                                                                                                                  //
		},                                                                                                                                    //
		reparse: function(bet) {                                                                                                              //
			try {                                                                                                                             //
				log(bet.actionNo);                                                                                                            //
				return reparseFrom9800(bet, 34);                                                                                              //
			} catch (err) {                                                                                                                   //
                                                                                                                                              //
			}                                                                                                                                 //
                                                                                                                                              //
		},                                                                                                                                    //
	}








];  


// 出错时等待 15     																		
exports.cp=cp;                                                                               	
exports.errorSleepTime=15;                                                             
// 重启时间间隔，以小时为单位，0为不重启															
//exports.restartTime=0.4;																		
exports.restartTime=0;			

exports.submit={														
	host:'127.0.0.2',																							
	path:'/index.php/dataSource/kj'			
}																	

exports.dbinfo={
	host:'127.0.0.1',
	user:'root',
	password:'Lulin0124',
	database:'xingcai'
}	

global.log=function(log){
	var date=new Date();
	console.log('['+date.toDateString() +' '+ date.toLocaleTimeString()+'] '+log)
}


function reparseFrom9800(bet, type) {
	str = bet.str;

	exports.errorSleepTime=500;  

	reg = new RegExp("<TD bgColor=#f6f6f6 align=\"center\"" + bet.actionNo + "<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color=\"#FF0000\"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color=\"#009933\">(\d+)<\/font><\/b>", ""); //

	match = str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[1] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: bet.actionNo
		}

		data.data = match[2] + "," + match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[7];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}

function getFrom9800(str, type) {

	str = str.substr(str.indexOf('bai12'), 560);
	exports.errorSleepTime=500;  

	var reg = /<TD bgColor=#f6f6f6 align="center">(\d+)<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color="#FF0000"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color="#009933">(\d+)<\/font><\/b>/,
		match = str.match(reg);

	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[2] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: match[1]
		}

		data.data = match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[8] + "," + match[9];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}																							
