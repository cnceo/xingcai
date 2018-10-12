// 彩票开奖配置
exports.cp=[
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                                                           //
	{
		title:'重庆时彩',
		source:'360',
		name:'cqssc',
		enable:true,
		timer:'cqssc', 

		option:{
			host:"cp.360.cn",
			timeout:50000,
			path: '/ssccq/',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		parse:function(str){
			try{
				return getFrom360CP(str,1);
			}catch(err){
				//throw('重庆时时彩解析数据不正确');
			}
		}
	},
	                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'新疆时时彩',
		source:'88',
		name:'xjssc',
		enable:true,
		timer:'xjssc',

		option:{
			host:"www.xjflcp.com",
			timeout:50000,
			path: '/game/sscAnnounce',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		
		parse:function(str){
			return getFromXJFLCPWeb(str,12);
		}
	},
		                                                                                                        //疆

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'天津时时彩',                                                                           	    	//
		source:'天津福利彩票网',                                                                                //
		name:'tjssc',                                                                                           //
		enable:true,                                                                                            //
		timer:'tjssc',                                                                                          //
		option:{                                                                                                //
			host:"xingcai1.xtidi.com",                                                                                   //天
			timeout:50000,                                                                                      //津
			path: '/tjssc/tjssc.php',                                                                 		    //时
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
	},	                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'北京PK10官网',
		source:'北京福利彩票网',
		name:'bjpk10',
		enable:true,
		timer:'bjpk101',

		option:{

			host:"www.bwlc.gov.cn",
			timeout:25000,
			path: '/bulletin/trax.html',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		
		parse:function(str){
			try{
				console.log("开始采集北京pk10-");
				return getFromPK10(str,20);
			}catch(err){
				throw('解析数据不正确');
			}
		}
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'广东11选5',
		source:'香雨娱乐平台',
		name:'gd11x5',
		enable:true,
		timer:'gd11x5',

		option:{
			host:"cp.360.cn",
			timeout:50000,
			path: '/gd11/',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		parse:function(str){
			try{
				return getFrom360CP(str,6);
			}catch(err){
				//throw('广东11选5解析数据不正确');
			}
		}
	},                                                                                                          //5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'山东11选5',
		source:'360彩票网',
		name:'sd11x5',
		enable:true,
		timer:'sd11x5', 

		option:{
			host:"cp.360.cn",
			timeout:50000,
			path: '/yun11/',
			headers:{
				"User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; Sleipnir/2.9.8) "
			}
		},
		parse:function(str){
			try{
				return getFrom360sd11x5(str,7);
			}catch(err){
				//throw('山东11选5解析数据不正确');
			}
		}
	},                                                                                                          //5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'江西11选5',
		source:'香雨娱乐平台',
		name:'jx11x5',
		enable:true,
		timer:'jx11x5',
 

		option:{
			host:"cp.360.cn",
			timeout:50000,
			path: '/dlcjx/',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		parse:function(str){
			try{
				return getFrom360CP(str,16);
			}catch(err){
				//throw('江西多乐彩解析数据不正确');
			}
		}
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'上海11选5',                                                                           	    	//
		source:'360彩票',                                                                                 		//
		name:'sh11',                                                                                            //
		enable:true,                                                                                            //
		timer:'sh11',                                                                                           //
		option:{                                                                                                //
			host:"xingcai1.xtidi.com",                                                                                   //
			timeout:50000,                                                                                      //上
			path: '/sh11/sh115_360.php',                                                                        //海
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
	},	                                                                                                        //11
                                                                                                                //选
	{                                                                                                           //5
		title:'上海11选5',                                                                              		//
		source:'爱彩乐',                                                                                		//
		name:'sh11',                                                                                          	//
		enable:true,                                                                                            //
		timer:'sh11',                                                                                         	//
		option:{                                                                                                //
			host:"xingcai1.xtidi.com",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/sh11/sh115_icle.php',                                                                     	//
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
						type:15,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //上
						data:m[2]                                                                               //海
					};                                                                                          //11
				}					                                                                            //选
			}catch(err){                                                                                        //5
				throw('--------爱彩乐上海11选5解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{
		title:'江苏快3',
		source:'360彩票',
		name:'jsk3',
		enable:true,
		timer:'jsk32',
 

		option:{
			host:"cp.360.cn",
			timeout:50000,
			path: '/k3js/',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		parse:function(str){
			try{
				return getFrom360CPK3(str,25);
			}catch(err){
				throw('江苏快3解析数据不正确');
			}
		}
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'快乐8',                                                                           				//
		source:'北京福利彩票',                                                                                  //
		name:'bjkl8',                                                                                           //
		enable:true,                                                                                            //
		timer:'bjkl8',                                                                                          //
		option:{                                                                                                //北
			host:"www.bwlc.net",                                                                                   //京
			timeout:50000,                                                                                      //快
			path: '/kl8/kl8.php',                                                                      			//乐
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
	},	                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		{
		title:'福彩3D',
		source:'500W',
		name:'fc3d',
		enable:true,
		timer:'fc3d',

		option:{
			host:"www.500wan.com",
			timeout:50000,
			path: '/static/info/kaijiang/xml/sd/list10.xml',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		
		parse:function(str){
			try{
				str=str.substr(0,300);
				var m;
				var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)" trycode="[\d\,]*?" tryinfo="" \/>/;
                                        
				if(m=str.match(reg)){
					return {
						type:9,
						time:m[3],
						number:m[1],
						data:m[2]
					};
				}
			}catch(err){
				throw('福彩3D-');
			}
		}
	},                                                                                                                            //
	                                                                                                                              //
	{
		title:'排列3',
		source:'88',
		name:'pai3',
		enable:true,
		timer:'pai3',

		option:{
			host:"www.500wan.com",
			timeout:50000,
			path: '/static/info/kaijiang/xml/pls/list10.xml',
			headers:{
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)"
			}
		},
		
		parse:function(str){
			try{
				str=str.substr(0,300);
				var m;	 
				var reg=/<row expect="(\d+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;
				if(m=str.match(reg)){
					return {
						type:10,
						time:m[3],
						number:20+m[1],
						data:m[2]
					};
				}
			}catch(err){
				throw('排3-');
			}
		}
	},                                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                         	//
		title:'澳门时时彩',                                                                                   	//
		source:'杏彩',                                                                                        	//
		name:'amssc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amssc',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'twssc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twssc',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},                                                                                                        	//
																												//
	{                                                                                                         	//
		title:'澳门快乐8',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'amkl8',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amkl8',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'hgkl8',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'hgkl8',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'澳门pk10',                                                                                     	//
		source:'杏彩',                                                                                        	//杏
		name:'ampk10',                                                                                         	//彩
		enable:true,                                                                                          	//系
		timer:'ampk10',                                                                                        	//统
		option:{                                                                                              	//彩
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'twpk10',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twpk10',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'am11',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'am11',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'台湾11选5',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'tw11',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'tw11',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'amklsf',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'amklsf',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//统
																												//彩
	{                                                                                                         	//
		title:'台湾幸运农场',                                                                                 	//
		source:'杏彩',                                                                                        	//
		name:'twklsf',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twklsf',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'澳门快3',                                                                                      	//
		source:'杏彩',                                                                                        	//杏
		name:'amk3',                                                                                         	//彩
		enable:true,                                                                                          	//系
		timer:'amk3',                                                                                        	//统
		option:{                                                                                              	//彩
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'台湾快3',                                                                                      	//
		source:'杏彩',                                                                                        	//
		name:'twk3',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'twk3',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'am3d',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'am3d',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'台湾3D',                                                                                       	//
		source:'杏彩',                                                                                        	//
		name:'tw3d',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'tw3d',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		source:'杏彩',                                                                                        	//
		name:'gslhc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'gslhc',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
	},		                                                                                                  	//
																												//
	{                                                                                                         	//杏
		title:'巴西快乐彩',                                                                                   	//彩
		source:'杏彩',                                                                                        	//系
		name:'bxklc',                                                                                         	//统
		enable:true,                                                                                          	//彩
		timer:'bxklc',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
		title:'巴西1.5分彩',                                                                                  	//
		source:'杏彩',                                                                                        	//
		name:'bx15',                                                                                          	//
		enable:true,                                                                                          	//
		timer:'bx15',                                                                                         	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
				throw('巴西1.5分彩解析数据不正确');                                                           	//
			}                                                                                                 	//
		}                                                                                                     	//
	},                                                                                                        	//
																												//
	{                                                                                                         	//
		title:'河内5分彩',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'qtllc',                                                                                         	//
		enable:true,                                                                                          	//
		timer:'qtllc',                                                                                        	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
				throw('河内5分彩解析数据不正确');                                                             	//彩
			}                                                                                                 	//系
		}                                                                                                     	//统
	},	                                                                                                      	//彩
																												//
	{                                                                                                         	//
		title:'河内2分彩',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'lfc',                                                                                           	//
		enable:true,                                                                                          	//
		timer:'lfc',                                                                                          	//
		option:{                                                                                              	//
			host:"xingcai.xtidi.com",                                                                                   	//
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
				throw('河内2分彩解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},		                                                                                                  	//
																												//
	{                                                                                                         	//
		title:'河内1分彩',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'ffc',                                                                                           	//
		enable:true,                                                                                          	//
		timer:'ffc',                                                                                          	//
		option:{                                                                                              	//杏
			host:"xingcai.xtidi.com",                                                                                   	//彩
			timeout:50000,                                                                                    	//系
			path: '/index.php/xingcai/xcffc',                                                                 	//统
			headers:{                                                                                         	//彩
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
						type:5,                                                                               	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('河内1分彩解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},	                                                                                                      	//
																												//
	{                                                                                                         	//
		title:'河内2分彩',                                                                                    	//
		source:'杏彩',                                                                                        	//
		name:'lfc',                                                                                           	//
		enable:true,                                                                                          	//
		timer:'lfc',                                                                                          	//
		option:{                                                                                              	//
			host:"localhost",                                                                                   	//
			timeout:50000,                                                                                    	//
			path: '/index.php/xingcai/xc2fc',                                                                 	//杏
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
						type:26,                                                                              	//
						time:m[3],                                                                            	//
						number:m[1],                                                                          	//
						data:m[2]                                                                             	//
					};                                                                                        	//
				}					                                                                          	//
			}catch(err){                                                                                      	//
				throw('河内2分彩解析数据不正确');                                                             	//
			}                                                                                                 	//
		}                                                                                                     	//
	},	                                                                                                      	//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
	}                                                                                                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
];                                                                                                              

// 出错时等待 15                                                                                                
exports.errorSleepTime=15;                                                                                      

// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
exports.restartTime=0;

exports.submit={

	host:'localhost',
	path:'/index.php/dataSource/kj'
}

exports.dbinfo={
	host:'localhost',
	user:'root',
	password:'tiancc1988@@@',
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