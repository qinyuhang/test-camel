const app = getApp();

Component({
    properties: {
        phone: {
            type: String,
            value: '800800400-01',
            observer: function (newVal) {
                if (!!newVal) {
                    const phoneArray = newVal.split(',');
                    this.setData({
                        phoneArray
                    })
                }
            },
        },
        dataEvt: {
            type: String,
            value: '',
        },
        dataAction: {
            type: String,
            value: '',
        }
    },
    data: {
        isHuawei: false,
        showConfirm: false,
        phoneArray: [],
        projectName: '',
    },
    attached: function() {
        let deviceInfo = {};
        let projectName = '';
        try {
            deviceInfo = swan.getSystemInfoSync();
            projectName = swan.getStorageSync("project_name");
        } catch (e) {
            deviceInfo = { brand : ''};
        }

        if(deviceInfo.brand.toLowerCase() === 'huawei') {
            this.setData({
                isHuawei: true,
                projectName,
            });
        }

    },
    methods: {
        call: function() {
            this.setData({
                showConfirm: false
            });

            let phone = '';
            const phoneArray = this.data.phoneArray;
            if(Array.isArray(phoneArray)) {
                phone = phoneArray[0];
            };

            swan.makePhoneCall({
                phoneNumber: phone
            });
        },

        handleSlotClick: function (e) {
            console.log('slot click!!!', e)
            const phone = this.properties.phone;
            const phoneArray = this.data.phoneArray;

            // 华为手机并且手机号中存在分机号 则调起弹窗
            if(!!this.data.isHuawei && Array.isArray(phoneArray) && phoneArray.length > 1) {
                this.setData({
                    showConfirm: true
                });
            } else {
                swan.makePhoneCall({
                    phoneNumber: phone
                })
            }

        }
    }
})