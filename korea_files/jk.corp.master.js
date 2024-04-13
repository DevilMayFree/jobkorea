jk.create('jk.corp.master.content', {
    $el: null,
    objCoMaster: {
        UcoNo: null,
        NiceCoCode: null
    },
    //최근 본 기업홈이력
    latestCoMaster: {
        ArrData: [],
        Template: '<a class="recently-viewed-item" href="{0}">{1}</a>'
    },
    load: function (_contentid, _objCoMaster) {
        var me = this;

        me.$el = $(_contentid);
        me.objCoMaster = _objCoMaster;

        //최근 기업 홈페이지 바인딩
        me.methods().bindLatestCoMasterUI();

        //이벤트 초기화
        me.events().init();
    },
    events: function () {
        var me = this;

        return {
            init: function () {
                var event = this;

                //동종업계 더보기 버튼 클릭 이벤트
                me.$el.find('#devRankIndustry').on('click', 'button', event.onClickSameIndsLayer);
            },

            onClickSameIndsLayer: function (e) {
                if (me.$el.find('.popup.popup-financial-ranking .popup-body table').length > 0) {
                    return;
                }

                var htmlSameIndsList = me.services().getSameIndsLayerContent(me.objCoMaster.NiceCoCode);
                me.$el.find('.popup.popup-financial-ranking .popup-body').prepend(htmlSameIndsList);
            }
        }
    },
    methods: function () {
        var me = this;

        return {            
            bindLatestCoMasterUI: function () {
                var isDuple = false;
                var dupleIdx = 0;

                me.latestCoMaster.ArrData = store.get('latestCoMasterUrl') || [];

                for (idx in me.latestCoMaster.ArrData) {
                    if (me.latestCoMaster.ArrData[idx].url == me.$el.find('#corpHistUrl').val()) {
                        isDuple = true;
                        dupleIdx = idx;
                    }
                }

                if (isDuple) {
                    me.latestCoMaster.ArrData.splice(dupleIdx, 1);
                }

                if (me.$el.find('#corpHistUrl').length > 0 && me.$el.find('#corpHistUrl').val() != '') {
                    me.latestCoMaster.ArrData.push(
                        {
                            url: me.$el.find('#corpHistUrl').val(), coName: me.$el.find('#corpHistName').val()
                        }
                    );

                    if (me.latestCoMaster.ArrData.length > 20) {
                        me.latestCoMaster.ArrData.splice(0, 10);
                    }

                    store.set('latestCoMasterUrl', me.latestCoMaster.ArrData);
                }

                if (me.$el.find('.sidemenu').length > 0) {
                    me.$el.find('.sidemenu').find('#latestCompany').empty();

                    for (idx in me.latestCoMaster.ArrData) {
                        if (idx >= (me.latestCoMaster.ArrData.length - 5) && idx <= (me.latestCoMaster.ArrData.length - 1)) {
                            var resultHtml = jk.util.string.format(me.latestCoMaster.Template,
                                me.latestCoMaster.ArrData[idx].url,
                                idx == me.latestCoMaster.ArrData.length - 1 ? '<strong>' + me.latestCoMaster.ArrData[idx].coName + '</strong>' : me.latestCoMaster.ArrData[idx].coName
                            );
                            me.$el.find('.sidemenu').find('#latestCompany').prepend(resultHtml);
                        }
                    }

                    if (me.$el.find('.sidemenu').find('#latestCompany').children().length > 0) {
                        me.$el.find('.sidemenu').show();
                    }
                }
            },
            bindSameIndsLayerContent: function () {

            }
        }
    },
    services: function () {
        var me = this;

        return {
            getSameIndsLayerContent: function () {
                var result = '';

                $.ajax({
                    type: 'GET',
                    url: '/Company/' + me.objCoMaster.UcoNo + '/FnncSameIndsContent/',
                    data: { Co_Code: me.objCoMaster.NiceCoCode },
                    dataType: 'html',
                    async: false,
                    success: function (response) {
                        result = response;
                    }
                });

                return result;
            }
        }
    }
});
jk.create('jk.corp.master.header', {
    $el: null,
    load: function (_headerCss) {
        var me = this;

        me.$el = $(_headerCss);
    },
    events: null,
    methods: null,
    services: null
});