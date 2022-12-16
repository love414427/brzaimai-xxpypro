package org.xxpay.core.common.constant;

/**
 * 返回码枚举类
 */
public enum RetEnum {

    // 公共返回码10开头
    RET_COMM_SUCCESS(0, "success"),
    RET_COMM_PARAM_ERROR(10001, "参数错误"),
    RET_COMM_PARAM_NOT_FOUND(10002, "缺少参数"),
    RET_COMM_OPERATION_FAIL(10003, "操作失败"),
    RET_COMM_RECORD_NOT_EXIST(10004, "记录不存在"),
    RET_COMM_VERCODE_ERROR(10005, "验证码输入错误"),
    RET_COMM_UNKNOWN_ERROR(10999, "未知错误"),

    // 业务中心返回码11开头
    RET_SERVICE_MCH_NOT_EXIST(11000, "商户不存在"),
    RET_SERVICE_ACCOUNT_NOT_EXIST(11001, "账户不存在"),
    RET_SERVICE_BANK_ACCOUNT_NOT_EXIST(11002, "银行账号不存在"),
    RET_SERVICE_SETT_AMOUNT_NOT_SETT(11003, "可用余额不足"),
    RET_SERVICE_FREEZE_AMOUNT_OUT_LIMIT(11004, "冻结金额超限"),
    RET_SERVICE_ACCOUNT_FROZEN_AMOUNT_FAIL(11005, "冻结金额失败"),
    RET_SERVICE_UN_FREEZE_AMOUNT_OUT_LIMIT(11006, "解冻金额超限"),
    RET_SERVICE_ACCOUNT_AMOUNT_UPDATE_FAIL(11007, "更新账户金额失败"),
    RET_SERVICE_ACCOUNT_BALANCE_OUT_LIMIT(11008, "余额不足,减款超限"),
    RET_SERVICE_SETT_RECORD_NOT_EXIST(11009, "结算记录不存在"),
    RET_SERVICE_SETT_STATUS_ERROR(11010, "结算状态错误"),
    RET_SERVICE_AMOUNT_ERROR(11011, "金额不符"),
    RET_SERVICE_DRAW_AMOUNT_MIN_LIMIT(11012, "金额超过最小限制"),
    RET_SERVICE_DRAW_AMOUNT_MAX_LIMIT(11013, "金额超过最大限制"),
    RET_SERVICE_DRAW_TIMES_LIMIT(11014, "超过当日提现次数"),
    RET_SERVICE_DRAW_TIME_LIMIT(11014, "不在可提现时间范围内"),
    RET_SERVICE_DRAW_DAY_NOT(11015, "当天不允许提现"),
    RET_SERVICE_DRAW_CLOSE(11016, "系统当前关闭提现"),
    RET_SERVICE_DRAW_DAY_AMOUNT_MAX_LIMIT(11017, "超过当日可提现最大金额"),
    RET_SERVICE_AGENTPAY_OUT_ERROR(11018, "没有配置代付出款账户类型"),
    RET_SERVICE_ACCOUNT_TYPE_NOT_EXIST(11019, "不存在的账户类型"),
    RET_SERVICE_ACCOUNT_SAFE_ERROR(11020, "账户安全验证失败，请联系系统管理员"),
    RET_SERVICE_ACCOUNT_DISABLED(11021, "账户状态不可用"),
    RET_SERVICE_DEL_EXISTS_USER_ROLE(11022, "该角色存在分配用户，不可删除"),
    RET_SERVICE_OUT_OF_RANGE_MAX_EXPORT_ROW(11023, "导出数据不可超过" + MchConstant.MAX_EXPORT_ROW + "行"),
    RET_SERVICE_TRADE_ID_EXISTS(11024, "该订单号已存在"),
    RET_SERVICE_NOT_ALLOW_UPLOAD_IMG(11025, "不支持的图片类型"),
    RET_SERVICE_UPLOAD_FILE_NOT_EXISTS(11026, "上传文件不存在"),
    RET_SERVICE_UPLOAD_CONFIG_ERROR(11027, "上传方式配置有误"),
    RET_SERVICE_ACCOUNT_NAME_NE_ID_CARD_NAME(11028, "开户名称必须与身份证姓名一致"),
    RET_SERVICE_ISV_PARAMS_ERROR(11029, "服务商配置项信息有误，请检查"),
    RET_SERVICE_INTERFACE_ERROR(11030, "接口查询失败"),
    RET_SERVICE_IDCARD_DATE_ERROR(11031, "身份证有效期格式有误"),
    RET_SERVICE_LICENSE_DATE_ERROR(11032, "营业执照有效期格式有误"),
    RET_SERVICE_LOGINUSERNAME_ERROR(11033, "用户登录名不允许全部是数字"),

    // 商户系统返回码12开头
    RET_MCH_PERMISSION_ERROR(12001, "权限错误"),
    RET_MCH_PASSWORD_NOT_MATCH(12002, "密码不符"),
    RET_MCH_STATUS_AUDIT_ING(12003, "商户审核中"),
    RET_MCH_STATUS_STOP(12004, "商户已停止使用"),
    RET_MCH_MOBILE_USED(12005, "手机号已被使用"),
    RET_MCH_MOBILE_FORMAT_ERROR(12006, "手机号格式错误"),
    RET_MCH_EMAIL_USED(12007, "邮箱已被使用"),
    RET_MCH_EMAIL_FORMAT_ERROR(12008, "邮箱格式错误"),
    RET_MCH_REGISTER_FAIL(12009, "注册失败"),
    RET_MCH_PASSWORD_FORMAT_FAIL(12010, "密码格式不符,8-16位字母和数字组合,且至少2位数字"),
    RET_MCH_AUTH_FAIL(12011, "鉴权失败"),
    RET_MCH_CHANNEL_NOT_EXIST(12012, "渠道不存在"),
    RET_MCH_QR_CODE_STOP(12013, "二维码已停止使用"),
    RET_MCH_UA_NOT_SUPPORT(12014, "不支持当前客户端"),
    RET_MCH_UA_NOT_EXIST(12015, "无法识别的客户端"),
    RET_MCH_CONFIG_NOT_EXIST(12016, "商户相关配置不存在"),
    RET_MCH_STATUS_CLOSE(12017, "商户相关状态已关闭"),
    RET_MCH_QR_CHANNEL_NOT_EXIST(12018, "商户扫码支付渠道没有配置"),
    RET_MCH_QR_UA_NOT_CONFIG(12019, "商户没有配置当前扫码支付渠道"),
    RET_MCH_CREATE_TRADE_ORDER_FAIL(12020, "创建交易订单失败, 请检查服务商/商户配置信息"),
    RET_MCH_CREATE_PAY_ORDER_FAIL(12021, "创建支付订单失败"),
    RET_MCH_WX_OPENID_NOT_EXIST(12022, "缺少OPENID参数"),
    RET_MCH_UPDATE_TRADE_ORDER_FAIL(12023, "更新交易订单失败"),
    RET_MCH_GET_WX_OPENID_FAIL(12024, "获取微信OpenId异常"),
    RET_MCH_TRADE_ORDER_NOT_EXIST(12025, "交易订单不存在"),
    RET_MCH_PASSAGE_NOT_EXIST(12026, "商户没有对应支付通道"),
    RET_MCH_MOBILE_SEND_TOO_MUCH(12027, "手机发送次数超限"),
    RET_MCH_MOBILE_SEND_ERROR(12028, "手机发送短信失败"),
    RET_MCH_SMS_VERIFY_FAIL(12029, "短信验证失败"),
    RET_MCH_SMS_VERIFY_OVER_TIME(12030, "短信验证超时"),
    RET_MCH_SETT_BATCH_APPLY_AMOUNT(12031, "申请金额与文件中总金额不一致"),
    RET_MCH_SETT_BATCH_APPLY_EMPTY(12032, "文件中账户记录为空"),
    RET_MCH_SETT_BATCH_APPLY_FORMAT_ERROR(12033, "文件内容错误"),
    RET_MCH_SETT_BATCH_APPLY_LIMIT(12034, "超出最大上传记录"),
    RET_MCH_PAP_PASSWORD_NOT_MATCH(12035, "支付密码错误"),
    RET_MCH_OLDPASSWORD_NOT_MATCH(12036, "旧密码不正确"),
    RET_MCH_PASSAGEID_NOT_EXIST(12037, "缺少PASSGEID参数"),
    RET_MCH_SETT_BATCH_APPLY_NUMBER(12038, "申请笔数与文件笔数不一致"),
    RET_MCH_ILLEGAL_LOGIN(12039, "非法登录"),
    RET_MCH_AGENTPAY_PASSAGE_NOT_EXIST(12040, "商户没有可用的代付通道"),
    RET_MCH_AGENTPAY_FEE_ERROR(12041, "商户代付手续费错误"),
    RET_MCH_AGENTPAY_AMOUNT_ERROR(12042, "代付金额不足扣手续费"),
    RET_MCH_PAY_PRODUCT_NOT_EXIST(12043, "商户支付产品不存在"),
    RET_MCH_PAY_ORDER_EXIST(12044, "商户订单已存在,请重新下单"),
    RET_MCH_BANK_ACCOUNTNO_USED(12045, "银行账号已被使用"),
    RET_MCH_TAG_USED(12046, "商户唯一标记已被使用"),
    RET_MCH_GOOGLEAUTH_SECRETKEY_NOT_EXIST(12047, "谷歌验证密钥不存在"),
    RET_MCH_GOOGLEAUTH_SECRETKEY_BIND_FAIL(12048, "谷歌验证绑定失败"),
    RET_MCH_GOOGLECODE_NOT_MATCH(12049, "谷歌验证码不正确"),
    RET_MCH_GOOGLEAUTH_NOT_BIND(12050, "没有绑定谷歌验证"),
    RET_MCH_AGENTPAY_AMOUNT_MAX_LIMIT(12050, "代付金额超过单笔最大限制"),
    RET_MCH_USERNAME_USED(12051, "用户名已被使用"),
    RET_MCH_AGENTPAY_ACCOUNTNO_REPEAT(12051, "代付申请有重复记录"),
    RET_MCH_AGENTPAY_INTERVAL_SHORT(12052, "代付申请过于频繁"),
    RET_MCH_AGENTPAY_NUM_NOT_EQUAL(12053, "代付申请笔数不一致"),
    RET_MCH_IP_NOT_LOGIN(12054, "当前IP不允许登录"),
    RET_MCH_NOT_SET_SECUTITY_TYPE(12055, "请先设置安全认证方式"),
    RET_MCH_NOT_SUPPORT_BAR_CODE(12056, "不支持的条码类型"),
    RET_MCH_GET_BAIDU_TOKEN(12057, "获取百度文字转语音token失败"),
	RET_MCH_NOT_EXISTS_PAYCODE(12058, "会员账户/付款码不存在"),
    RET_MCH_TRADE_NOT_NEED_SYNC(12059, "订单状态无需同步"),
    RET_MCH_LOGIN_TYPE_ERROR(12060, "登录端loginType不符合要求"),
    RET_MCH_STORENO_USED(12061, "该门店编号已存在"),
    RET_MCH_ALREADY_REFUNDS(12062, "该订单已全额退款"),
    RET_MCH_REFUNDAMOUNT_GT_PAYAMOUNT(12063, "申请退款金额超过订单可退款金额"),
    RET_MCH_COUPON_STATUS_ERROR(12064, "优惠券已使用或已过期"),
    RET_MCH_ISV_SPEAKER_CONFIG_ERROR(12065, "服务商未配置云喇叭信息"),
    RET_MCH_STORE_NOT_EXIST(12066, "门店不存在"),
    RET_MCH_STORE_SPEAKER_STATUS_ERROR(12067, "设备已绑定"),
    RET_MCH_STORE_SPEAKER_CODE_ERROR(12068, "验证金额错误"),
    RET_MCH_LIMIT_AMOUNT_ERROR(12069, "小于最低消费金额"),
	RET_MCH_LIMIT_STOCK_NUM_ERROR(12070, "库存数量不能为空"),
    RET_MCH_MEMBER_GOODS_EXCHANGE_STATUS_ERROR(12071, "兑换状态错误"),
    RET_MCH_COUPON_VALIDATE_DAY_ERROR(12072, "领取后有效天数不能为空"),
    RET_MCH_REAL_AMOUNT_GT_REQUIRED(12073, "实付金额不可大于应付金额"),
    RET_MCH_STORE_DEVICE_STATUS_BINDING(12074, "存在已绑定设备请先解除绑定"),
    RET_MCH_REFUND_STATUS_NOT_SUPPORT(12075, "退款订单仅支持支付成功和部分退款状态，其他状态不允许发起退款"),
    RET_MCH_TRADE_TYPE_NOT_NEED_SYNC(12076, "该订单类型无需同步"),
    RET_MCH_TRADE_HAS_REFUNDING_ORDER(12077, "当前订单存在一笔退款中订单，请稍后发起退款"),
    RET_MCH_ISV_PRINTER_CONFIG_NULL(12078, "服务商未配置打印机"),
    RET_MCH_ISV_PRINTER_CONFIG_OFF(12079, "服务商打印机关闭"),
    RET_MCH_STORE_CONFIG_NULL(12080, "门店未配置打印机"),
    RET_MCH_STORE_CONFIG_OFF(12081, "门店打印机关闭"),
    RET_MCH_MEMBER_TOKEN_EXPIRED(12082, "当前Token已失效，请重新扫码支付"),
    RET_MCH_VERSION_NOT_EXISTS(12083, "未查询到当前版本信息"),
    RET_MCH_CUR_VERSION_EXISTS(12084, "当前客户端类型已存在该版本序列号"),
    RET_MCH_DIFF_DAY(12085, "时间范围需大于一天，小于三十天"),
    RET_IMG_CLASSIFY_ERROR(12086, "收款金额识别错误"),
	RET_MCH_MEMBER_NOT_EXISTS(12087, "会员不存在"),
    RET_MCH_MEMBER_TYPE_NOT_EXISTS(12088, "查询会员信息所依据的类型错误"),
    RET_MCH_HANDOVER_FINISH(12089, "当前操作员非工作状态，请退出重新操作"),
    RET_MCH_HANDOVER_DATA_MODIFY(12090, "当前操作员统计数据有变化，请重新获取统计信息后再确认"),
    RET_MCH_AUTHLIST_NOT_ENOUGH(12091, "授权集合不符合要求，请勾选必要权限集合"),
    RET_MCH_COUPON_AMOUNT_ERROR(12092, "优惠券面值错误"),
    RET_MCH_ORDER_STATUS_NOT_DEPOSIT_ING_ERROR(12093, "当前订单状态非[押金待结算]， 不允许操作"),
    RET_MCH_ORDER_MODE_NOT_DEPOSIT_ERROR(12094, "当前订单非押金模式，不允许操作"),
    RET_MCH_ORDER_DEPOSIT_AMOUNT_ERROR(12095, "押金消费金额有误"),
    RET_MCH_ORDER_DEPOSIT_ORDER_AMOUNT_ERROR(12096, "押金金额不得包含优惠金额"),
    RET_MCH_DEPOSIT_STATUS_ERROR(12097, "商户未开通[押金支付]权限"),
    RET_MCH_DEPOSIT_PRODUCT_ERROR(12098, "当前支付产品不支持[押金支付]模式"),
    RET_MCH_REFUNDS_PASSWORD_NULL(12099, "退款密码为空"),
    RET_MCH_REFUNDS_PASSWORD_ERROR(12100, "退款密码错误"),
    RET_MCH_AREA_ID_ERROR(12101, "区域ID输入有误"),
    RET_MCH_COUPON_SINGLE_USER_LIMIT_ERROR(12102, "限制用户领取数量不能为空"),
    RET_MCH_COUPON_EXPIRED_WARNING_TIME_ERROR(12103, "过期提醒提前天数不能为空"),
    RET_MCH_TRADE_TYPE_NOT_PAY(12104, "该订单尚未支付，无需同步"),
    RET_MCH_STORE_BANNER_NULL(12105, "轮播图名称不能为空"),
    RET_MCH_MINI_QRCODEJUMP_NOT_RELEASE(12106, "小程序二维码规则尚未发布，请联系服务商发布"),
    RET_MCH_TYPE_ARTICLE_EXISTS(12107, "已经存在该类型文章"),

    // 运营系统返回码13开头
    RET_MGR_STATUS_ERROR(13001, "状态错误"),
    RET_MGR_LOGIN_FAIL(13002, "登录失败"),
    RET_MGR_USER_STOP(13003, "用户禁止使用"),
    RET_MGR_PAY_INTERFACE_NOT_EXIST(13005, "支付接口不存在"),
    RET_MGR_PAY_PASSAGE_NOT_EXIST(13006, "支付通道不存在"),
    RET_MGR_PAY_PRODUCT_NOT_EXIST(13007, "支付产品不存在"),
    RET_MGR_PAY_PASSAGE_ACCOUNT_NOT_EXIST(13008, "支付通道账户不存在"),
    RET_MGR_BUILD_NOTIFY_URL_ERROR(13009, "创建通知URL异常"),
    RET_MGR_SUPER_PASSWORD_NOT_MATCH(13010, "超级密码不正确"),
    RET_MGR_AGENTPAY_PASSAGE_NOT_EXIST(13011, "代付通道不存在或不可用"),
    RET_MGR_AGENTPAY_PASSAGE_ACCOUNT_NOT_EXIST(13012, "代付通道账户不存在或不可用"),
    RET_MGR_USERNAME_USED(13013, "用户名已被使用"),
    RET_MGR_MCH4AGENT_NOT_SET_PASSAGE(13014, "上级代理商未配置此支付/代付信息，请先设置上级代理商可见通道"),
    RET_MGR_MOBILE_EXISTS(13015, "手机号已存在"),
    RET_MGR_USERNAME_EXISTS(13015, "登录名已存在"),
    RET_MGR_EMAIL_EXISTS(13015, "邮箱已存在"),


    RET_MGR_SET_APAY_FEE_ERROR_MCH_SET(13015, "代付通道费用高于商户配置手续费，修改失败"),
    RET_MGR_SET_APAY_FEE_ERROR_AGENT_SET(13016, "代付通道费用高于代理商配置代理费用，修改失败"),

    RET_MGR_SYNC_PAYACCOUNT_PARAMS_ERROR(13017, "同步子账户失败，配置参数设置有误"),

    RET_MGR_PAY_TYPE_NOT_EXIST(13018, "支付类型不存在"),

    RET_MGR_SETFEE_LT_PARENT_AGENT_FEE(13019, "不得小于上级代理商 费率/费用，请修改"),
    RET_MGR_SETFEE_LT_CHANNEL_FEE(13020, "不得小于通道 费率/费用，请修改"),
    RET_MGR_SETFEE_GT_CHILDREN_MCH_FEE(13021, "不得高于下级商户 费率/费用，请修改"),
    RET_MGR_SETFEE_GT_CHILDREN_AGENT_FEE(13022, "不得高于下级代理商 费率/费用，请修改"),

    RET_MGR_SUBUSER_NOT_EXIST(13023, "用户不存在"),

    // 代理商系统返回码14开头
    RET_SERVICE_AGENT_NOT_EXIST(14000, "代理商不存在"),
    RET_AGENT_STATUS_STOP(14001, "代理商已停止使用"),
    RET_AGENT_USERNAME_USED(14003, "用户名已被使用"),
    RET_AGENT_NOT_MCH_PERMISSION(14004, "没有该商户权限"),
    RET_AGENT_ACCOUNT_NOT_EXIST(14004, "代理商账户不存在"),
    RET_AGENT_IS_MAX_LEVEL(14005, "当前级别不允许新增子代理商"),
	RET_AGENT_NOT_ALLOW_ADD_AGENT(14006, "当前配置不允许发展子代理商"),
	RET_AGENT_NOT_ALLOW_ADD_MCH(14007, "当前配置不允许发展商户"),
	RET_AGENT_OFF_RATE_LT_CURRENT(14008, "下级代理商充值费率不得低于当前代理费率"),
	RET_AGENT_DELETE_PASSAGE_ERROR_MCH(14009, "商户或下级代理商所属商户已配置该通道，不可删除"),
	RET_AGENT_DELETE_PASSAGE_ERROR_SUBAGENT(14010, "下级代理商已配置该通道，不可删除"),
	RET_AGENT_LT_PASSAGE_RATE_ERROR(14011, "代理商费率不得低于通道费率，请修改"),
	
	RET_AGENT_SET_PAY_RATE_ERROR_MCH(14011, "设置支付费率不允许高于所属商户费率，请修改"),
	RET_AGENT_SET_PAY_RATE_ERROR_SUBAGENT(14012, "设置支付费率不允许高于下级代理商费率，请修改"),
	RET_AGENT_SET_PAY_RATE_ERROR_PARENTAGENT(14013, "设置支付费率不允许低于上级代理商费率，请修改"),
	
	RET_AGENT_SET_APAY_RATE_ERROR_MCH(14014, "设置代付费用不允许高于所属商户费用，请修改"),
	RET_AGENT_SET_APAY_RATE_ERROR_SUBAGENT(14015, "设置代付费用不允许高于下级代理商费用，请修改"),
	RET_AGENT_SET_APAY_RATE_ERROR_PARENTAGENT(14016, "设置代付费用不允许低于上级代理商费用，请修改"),
	
	RET_MCH_SET_PAY_RATE_ERROR_AGNET(14017, "商户费率不得低于上级代理商费率，请修改"),
	RET_MCH_SET_PAY_RATE_ERROR_PASSAGE(14018, "商户费率不得低于通道费率，请修改"),
	
	RET_MCH_SET_APAY_RATE_ERROR_AGNET(14019, "商户代付手续费不得低于上级代理商费用，请修改"),
	RET_MCH_SET_APAY_RATE_ERROR_PASSAGE(14020, "商户代付手续费不得低于通道费用，请修改"),

    RET_AGENT_OFF_RECHARGE_RATE_CHECK_ERROR(14021, "代理商线下充值费率不得低于上级代理商费率，不得高于所有[下级代理商/下级商户]充值费率，请修改"),

    RET_MCH_FEE_TEMPLET_NOT_EXISTS(14022, "未配置费用模板，请联系运营平台"),


    // 服务商系统返回码15开头
    RET_ISV_NOT_EXIST(15000, "服务商不存在"),
    RET_ISV_STATUS_STOP(15001, "服务商已停止使用"),
    RET_ISV_FEE_ERROR(15002, "不得低于服务商费率，请修改！"),
    RET_ISV_PASSAGE_CONFIG_ERROR(15003, "服务商未配置该支付通道"),
    RET_ISV_DEVICE_NO_EXISTS(15004, "当前设备类型的设备编号已存在"),
    RET_ISV_NOT_SUPPORT_WX_ACCOUNT(15005, "不支持的微信账号类型"),
    RET_ISV_AGENT_PROFIT_ERROR(15006, "分佣比例设置有误"),
    RET_ISV_ALIPAY_INDUSTRY_CODE_ERROR(15007, "请选择完整的行业分类"),
    RET_ISV_NOT_SUPPORT_WX_AUTHFROM(15008, "不支持的微信授权来源"),
    RET_ISV_WX_MCH_NOT_AUTH(15009, "商户未授权"),
    RET_ISV_MINI_DOMAIN_NOT_EXISTS(15010, "服务商未配置服务器域名"),
    RET_ISV_MINI_AUDITSTATUS_NOT_ING(15011, "小程序状态不是审核中"),
    RET_ISV_MINI_AUDITSTATUS_IS_ING(15012, "已经有正在审核的小程序，请等待审核完成"),
    RET_ISV_MINI_IS_APPLET_ING(15013, "当前已有正在申请的小程序任务"),
    RET_ISV_MINI_AUTHSTATUS_ERROR(15014, "当前申请小程序任务状态不正确"),
    RET_ISV_MINI_NOT_RELEASE(15015, "小程序没有发布，不能发布二维码规则"),
    RET_ISV_INPUT_PARAMS_ERROR(15016, "进件接口参数异常"),

    // 会员系统返回码16开头
    RET_MBR_USE_WECHAT(16000, "请在微信端访问"),
    RET_MBR_COUPON_NOT_EXISTS(16001, "该优惠券不可用"),
    RET_MBR_COUPON_GET_OVER(16002, "已抢完"),
    RET_MBR_COUPON_HAS_GET(16003, "你已经领取该卡券，不要贪心哦"),
    RET_MBR_POINTS_GOODS_NOT_EXISTS(16004, "积分商品不可用"),
    RET_MBR_POINTS_GOODS_GET_OVER(16005, "已兑完"),
    RET_MBR_POINTS_GOODS_HAS_GET(16006, "你已经兑换该商品，不要贪心哦"),
    RET_MBR_POINTS_NOT_ENOUGH(16007, "积分不足"),
    RET_MBR_NO_CARD(16008, "商户尚未配置会员卡"),
    RET_MBR_NO_SUCH_RECHARGE_RULE(16009, "该充值优惠不存在"),
    RET_MBR_COUPON_OUT_TIME(16010, "优惠券已过期"),
    RET_MBR_NO_SUCH_GOODS(16009, "商品信息错误"),
    RET_MBR_PROPS_VALUE_DUPLICATE(16011, "当前分类已存在该属性值"),
    RET_MBR_SELECT_GOODS_CATEGORY(16012, "请选择商品分类"),
    RET_MBR_SELECT_STORES(16013, "请选择门店"),
    RET_MBR_SELECT_GOODS_PROPS_CATEGORY(16014, "请选择商品属性分类"),
    RET_MBR_RECEIVE_ADDRESS_ERROR(16015, "收货地址信息错误"),
    RET_MBR_AREA_ERROR(16016, "堂食区域信息错误"),
    RET_MBR_GOODS_PROPS_ERROR(16017, "商品属性信息错误"),
    RET_MBR_RULE_COUPON_NOT_EXISTS(16018, "充值规则赠送的优惠券不存在"),
    RET_MBR_GET_TEL_ERROR(16019, "授权失败，请重试"),
    RET_MBR_PAY_ERROR(16020, "支付失败"),
    RET_MBR_TRADEORDER_ALREADY_SUCCESS(16021, "订单已完成支付"),
    RET_MBR_ORDERAMOUNT_LESS_THAN_DELIVERY(16022, "订单金额小于起送金额，无法下单"),
    RET_MBR_GOODS_STOCK_NUM_NOT_ENOUGH(16023, "商品已售完"),
    RET_MBR_AFTER_SALE_NUM_OVER(16024, "超出可售后数量"),

    // his系统返回码17开头
    RET_HIS_PARAMETER_EXTRA_BAR_REQUIRED(17001, "HIS系统商扫客时统一下单接口参数extra(条形码)不能为空"),
    RET_HIS_PARAMETER_AMT_AND_PRODUCTID_AND_MCHORDERNO_REQUIRED(17002, "HIS系统商扫客时参数产品ID、金额和商户号不能为空"),
    RET_HIS_MCHID_REQUIRED(17003, "商户不存在"),
    RET_HIS_MCH_STATE_ERROR(17004, "商户状不可用态"),
    RET_HIS_MCH_KEY_REQUIRED(17005, "商户秘钥不能为空"),
    RET_HIS_MCH_STREET_STREET_CODE_REQUIRED(17006, "街道编码编码不能为空"),
    RET_HIS_MCH_STREET_CODE_REQUIRED(17007, "区县编码不能为空"),
    RET_HIS_MCH_VILLAGE_CODE_REQUIRED(17008, "村委社区编码不能为空"),
    RET_HIS_MCH_TRADE_ORDER_BATCH_NO_DATA(17009, "没有数据"),
    RET_HIS_MCH_TRADE_ORDER_BATCH_VIEW_ROLE_ERR(17010, "角色只能是商户管理员、卫健委和平台运营商"),
    RET_HIS_MCH_TRADE_ORDER_BATCH_THIRT_DAY_ERR(17011, "30天日期错误"),
    RET_HIS_MCH_TRADE_ORDER_BATCH_THIRT_MONTH_ERR(17012, "获取当前月份的日期错误"),
    RET_HIS_MCH_TRADE_ORDER_BATCH_TOTAL_DATA_ERR(17013, "按天统计数据错误");

    private int code;
    private String message;

    RetEnum(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode()
    {
        return this.code;
    }

    public String getMessage() {
        return this.message;
    }

}