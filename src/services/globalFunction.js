const globalFunction = {
    methods: {
        cutText(text, start, end){
            return text.substring(start, end);
        },
        helperCurrency(format){
            var data = { 
                // Indonesia Rupiah
                'IDR': {
                    'symbol': 'Rp',
                    'code': 'id-ID',
                },
                // US Dollar
                'USD': {
                    'symbol': '$',
                    'code': 'en-US',
                },
                // Euro
                'EUR': {
                    'symbol': '€',
                    'code': 'de-DE',
                },
                // British Pound Sterling
                'GBP': {
                    'symbol': '£',
                    'code': 'en-GB',
                }, 
                // Indian Rupee
                'INR': {
                    'symbol': '₹',
                    'code': 'en-IN',
                }, 
                // Japanese Yen
                'JPY': {
                    'symbol': '¥',
                    'code': 'jp-JP',
                }, 
                // South Korean Won
                'KRW': {
                    'symbol': '₩',
                    'code': 'ko-KR',
                },
                // Philippine Peso
                'PHP': {
                    'symbol': '₱',
                    'code': 'tl-PH',
                },
                // Thai Baht
                'THB': {
                    'symbol': '฿',
                    'code': 'th-TH',
                },
                // Vietnamese Dong
                'VND': {
                    'symbol': '₫',
                    'code': 'vi-VN',
                }, 
                //Chinese Yuan
                'RMB': {
                    'symbol': 'CN¥',
                    'code': 'zh-CN',
                },
                //New Taiwan Dollar
                'NTD': {
                    'symbol': 'NT$',
                    'code': 'zh-TW',
                }, 
            }

            return data[format]
        },
        helperMoneyFormatterNew(value, format) {
            let options = {}
            if(value < 0) options.signDisplay = 'never'
            if(value === 0 || value === '0' || value == null || isNaN(value)){return '0'}
            else if(value != null && value != '' && value != undefined){
                return new Intl.NumberFormat(this.helperCurrency(format).code, options).format(value)
            }
        },
    }
}

export default globalFunction