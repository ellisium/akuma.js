////SKELETON MODULE
var package=require('./package.json');
module.exports=skeleton;

	function skeleton(){
		events.EventEmitter.call(this);
	}
		
	skeleton.super_=events.EventEmitter;
	skeleton.prototype=Object.create(events.EventEmitter.prototype,{
	    constructor: {
		value: skeleton,
		enumerable: false
	    }
	});
	skeleton.prototype.module={
		package:package,
		classes:{
	
			blockNodejs:{
				classname:"blockNodejs",
		  		classname_extends:"Module",
				private:{static:{encrypt:663}},
				protected:{static:{}},
				public: {
					final:{},
					abstract:{},
					static:{},
					__construct:function(){ 
						this._set('name',this.package.name); 	 						
						this._set('version', this.package.version);
						this._set('author', this.package.author);
						this._set('tab','front_office_features');
						this._set('need_instance', 0);
						
						var self=this;
						var require_php={variables:false, constants:false,  classes:['Tools','Db']}; 
						
						/*
						this.package is auto imported package.json file module
						CALLBACK WAY
						parent::func(); -> this.parent.func(args,function(data){
							::optional this.callback();	
							::end self.callback();
						});
						methods property -> this.methods.func(args, function(data){ 
							::optional this.callback();	
							::end self.callback();
						});
						EVENT WAY	
						var f=this.async.func(args); 
						f.on('return', function(data){ 
							::end self.callback();
						});
						this.parent.func inherited parent methods parent::methods
						this.methods.func inherited parent methods this->methods
						this.cls_js.visibility.func own class methods this->methods if you use this.methods.func on own class methods, it will produce stackoverflow
						*/			  
						//Class instance example 	 
						//var tz=new this.globals.classes.new.Tools('tz'/*name=variable name, obj{public:{static:{}},private:{static:{}},protected:{static:{}}, bool global*/); 
						/*this._set_static_object(tz.public.nodejs_instance_id, 'self','encrypt', tz); 
						tz._obj_method(this,'encrypt',["zen"],function(data){ 
							tz._obj_method(this,'encrypt',['eric'],function(data){ 
								console.log( data,777); 
								self.callback
							});
						}); */
						//Class Scope Resolution Operator "Tools::encrypt"
						this._g_class_method('Tools','encrypt', [self.package.name], function(data){ 
							self._set('secure_key',data);  
						 	self._parent_method('__construct',[],function(data){ 
								/*this.methods.l('Nodejs block', function(data){
									this._set('displayName',data); 
									this.methods.l('Adds a block with additional links.', function(data){ 
										this._set('description', data);
										this.methods.l('Are you sure you want to delete all your links ?',function(data){
											this._set('confirmUninstall',data); 
											this.callback();
										});
									});
								});*/	
								//Using parallel method console
								this._method('nodejs_parallel',[
									{name:'l',params:['Nodejs block']},
									{name:'l',params:['Adds a block with additional links.']},
									{name:'l',params:['Are you sure you want to delete all your links ?']}
								 , /*post-process data Array.prototype.methods {name:'push',params:[1,2, "zne"]}*/null], function(data){
									this._set('displayName',data[0]); 
									this._set('description',data[1]);
									this._set('confirmUninstall',data[2]);  
									this.callback();
								});			
							});
						});
					},
					install:function(){ 
						var self=this;

						var require_php={variables:false, constants:false,  classes:['BlockNodejsModel','Configuration','Db','Shop','Language','CMS']}; 
						this._parent_method('install',[],function(data){ 
							if(!data){self.callback(false);
							}else{
							this._method('nodejs_parallel',[
								{name:'registerHook',params:['leftColumn']},
								{name:'registerHook',params:['rightColumn']},
								{name:'registerHook',params:['header']},
								{name:'registerHook',params:['footer']},
								{name:'registerHook',params:['actionObjectNodejsUpdateAfter']},
								{name:'registerHook',params:['actionObjectNodejsDeleteAfter']},
								{name:'registerHook',params:['actionShopDataDuplication']}
							 , null], function(data){
								for(var i=0; i<data.length; i++){
									if(!data[i])this.callback(false);
								}
								
								this._g_class_method('BlockNodejsModel','createTables',[],function(data){
									if(!data){this.callback(false);}
									else{
									this._g_class_method('Configuration','nodejs_parallel',[
										{classe:'Configuration' , name:'updateValue',params:['FOOTER_CMS','']},
										{classe:'Configuration' , name:'updateValue',params:['FOOTER_BLOCK_ACTIVATION', 1]},
										{classe:'Configuration' , name:'updateValue',params:['FOOTER_POWEREDBY', 1]}
										, null], function(data){
										for(var i=0; i<data.length; i++){ 
											if(!data[i])self.callback(false);
										}
										next.call(self);
									});
									}
								});
							});
							}
						});
						function next(){
							this._method('_clearCache',['blockNodejs.tpl'],function(data){
								this._g_class_method('Db','nodejs_parallel',[
									{name:'getInstance',params:[],chain:true/*, set:'var name'*/},
									{name:'insert',params:['Nodejs_cms_block', {'id_cms_category':1, 'location':0,'position':0, }]},
									{name:'Insert_ID',params:[]},
									null],function(data){
									if(!data)self.callback(false);	
									var id_Nodejs_block=data[2]; 
									shops.call(self, id_Nodejs_block);
								});
							});
						}
						function shops(id_Nodejs_block){
							this._g_class_method('Shop','getShops',[true,null,true],function(data){
								var o= Object.getOwnPropertyNames(data),
								t_objects=o.length,
								pp=[{name:'getInstance',params:[],chain:true}];
								for(var i=0; i< t_objects; i++){
								var k=o[i], item=data[k];
								if(k!='length')pp.push({name:'insert',params:['Nodejs_cms_block_shop', {'id_cms_block':id_Nodejs_block, 'id_shop':item}]}); 
								}
								pp.push(null); 
								this._g_class_method('Db','nodejs_parallel',pp,function(data){
									languages.call(self, id_Nodejs_block);
								});
							});
						}
						function languages(id_Nodejs_block){
							this._method('l',['Information'],function(data){
								var ll=data;
								this._g_class_method('Language','getLanguages',[false],function(data){
									var o= Object.getOwnPropertyNames(data),
									t_objects=o.length,
									pp=[{name:'getInstance',params:[],chain:true}];
									for(var i=0; i< t_objects; i++){
									var k=o[i], item=data[k];
									if(k!='length')pp.push({name:'insert',params:['Nodejs_cms_block_lang', {'id_cms_block':id_Nodejs_block, 'id_lang':item.id_lang, name:ll}]});
									}
									pp.push(null);  
									this._g_class_method('Db','nodejs_parallel',pp,function(data){
										CMS.call(self, id_Nodejs_block);
									});
								});
							});
						}
						function CMS(id_Nodejs_block){
							this._g_class_method('CMS','getCMSPages',[null,1],function(data){
								var o= Object.getOwnPropertyNames(data),
								t_objects=o.length,
								pp=[{name:'getInstance',params:[],chain:true}]; 
								for(var i=0; i< t_objects; i++){
								var k=o[i], item=data[k];
								if(k!='length')pp.push({name:'insert',params:['Nodejs_cms_block_page', {'id_cms_block':id_Nodejs_block, 'id_cms':item.id_cms, 'is_category':0}]});
								}
								pp.push(null);
								this._g_class_method('Db','nodejs_parallel',pp,function(data){ 
									self.callback(true);
								});
							});
						}
					},
					uninstall:function(){
						var require_php={variables:false, constants:false,  classes:['BlockNodejsModel','Configuration']}; 
						var self=this;
						this._method('_clearCache',['blockNodejs.tpl'],function(data){
							this._parent_method('uninstall',[],function(data){
								if(!data)self.callback(false);
								this._g_class_method('BlockNodejsModel','DropTables',[],function(data){
									if(!data)self.callback(false);
									this._g_class_method('Configuration','nodejs_parallel',[
									{name:'deleteByName',params:['FOOTER_CMS']},
									{name:'deleteByName',params:['FOOTER_BLOCK_ACTIVATION']},
									{name:'deleteByName',params:['FOOTER_POWEREDBY']}
								 	, null], function(data){
										self.callback(true);
									});
								});
							});
						});
					},/*
					hookDisplayHeader:function(){
						this->context->controller->addCSS(this->_path.'css/style.css', 'all');
						this->context->controller->addJS(this->_path.'js/script.js', 'all');
					},*/
					hookDisplayLeftColumn:function(){
						var self=this;
						var require_php={variables:false, constants:false,  classes:['BlockNodejsModel']}; 
						//Call same level function directly this.cls_js.visibility.func.apply(this, array params direct js function (scope stay in js) 
						this.cls_js.public.displayBlockNodejs.apply(this,[this.globals.classes.BlockNodejsModel.const.LEFT_COLUMN]);	
					},/*
					hookDisplayRightColumn:function(){
						this->context->smarty->assign(array(
							'placement' => 'right',
						));

						return this->display(__FILE__, 'right.tpl');
					},
					hookDisplayFooter:function(){
						this->context->smarty->assign(array(
							'module_link' => this->context->link->getModuleLink('skeleton', 'details'),
						));

						return this->display(__FILE__, 'footer.tpl');
					},*/
					displayBlockNodejs:function(column){
						var require_php={variables:false, constants:false, classes:['BlockNodejsModel']}; 
						var self=this; 
						this._parent_method('getCacheId',['blockNodejs|'+column],function(data){		
							this._method('isCached',['blockNodejs.tpl',data],function(data){
								if(!data){
								this._g_class_method('BlockNodejsModel','getCMSTitles',[column],function(data){
									self._obj_method('smarty','assign',[{'Nodejsblock':1,'Nodejs_titles':data,'contact_url':'contact-form'}],function(data){ 
										this._parent_method('getCacheId',['blockNodejs|'+column],function(data){ 
											this._method('display',[__filename.replace('.js','.php'),'blockNodejs.tpl', data],function(data){
												this.callback(data);
											});
										});
									});
								});
								}
							});
						});
					},/*
					getContent:function(){
						message = '';

						if (Tools::isSubmit('submit_'.this->name))
							message = this->_saveContent();

						this->_displayContent(message);

						return this->display(__FILE__, 'settings.tpl');
					},
					_saveContent:function(){
						message = '';

						if (Configuration::updateValue('MOD_SKELETON_NAME', Tools::getValue('MOD_SKELETON_NAME')) &&
							Configuration::updateValue('MOD_SKELETON_COLOR', Tools::getValue('MOD_SKELETON_COLOR')))
							message = this->displayConfirmation(this->l('Your settings have been saved'));
						else
							message = this->displayError(this->l('There was an error while saving your settings'));

						return message;
					},
					_displayContent(message):function(){
						this->context->smarty->assign(array(
							'message' => message,
							'MOD_SKELETON_NAME' => Configuration::get('MOD_SKELETON_NAME'),
							'MOD_SKELETON_COLOR' => Configuration::get('MOD_SKELETON_COLOR'),
						));
					},
					_checkContent:function(){
						if (!Configuration::get('MOD_SKELETON_NAME') &&
							!Configuration::get('MOD_SKELETON_COLOR'))
							this->warning = this->l('You need to configure this module.');
					},
					_createContent:function(){
						if (!Configuration::updateValue('MOD_SKELETON_NAME', '') ||
							!Configuration::updateValue('MOD_SKELETON_COLOR', ''))
							return false;
						return true;
					},
					_deleteContent:function(){
						if (!Configuration::deleteByName('MOD_SKELETON_NAME') ||
							!Configuration::deleteByName('MOD_SKELETON_COLOR'))
							return false;
						return true;

					}*/
				}
			}		
		},
		pseudo_domain:"include_once(dirname(__FILE__) . '/BlockNodejsModel.php');",//execute php code in scope
		javascript:function(){//execute javascript code in pseudo domain

		}
	};
