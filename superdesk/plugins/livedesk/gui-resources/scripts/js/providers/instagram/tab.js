define('providers/instagram/tab', ['providers', 'providers/_utils'], function(providers, utils) {	providers.instagram = {		className: 'big-icon-instagram',	                tooltip: _('instagram'),		init: function() {							require(['providers','providers/instagram'], function(providers) {				providers.instagram.init();			});		},		// aop on timeline view		timeline: 		{		    init: function()		    {		        var self = this;		        // TODO move to set for cleanness		        $(this.el).on('click', '.btn.publish', function()		        {		        	console.log('tab publish');		            var data = {Content: self.model.get('Content'), Meta: self.model.get('Meta')};	                data.Meta = JSON.stringify(data.Meta);	                utils.MetaCheck.call(self, data.Meta) && 	                    (self.model.set(data).sync() && self.el.find('.actions').addClass('hide'));		        });		        $(this.el).on('click', '.btn.cancel', function()                {		            $('.actions', self.el).addClass('hide');                });		    },		    edit: function()		    {		        $('.actions', this.el).removeClass('hide');		    },		    save: function()		    {		        return false;		    }		}	};	return providers;});