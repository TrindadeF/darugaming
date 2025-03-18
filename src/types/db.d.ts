// Common Interface
interface Timestamps {
    createdAt: Date;
    updatedAt?: Date;
}

// User-related
interface User extends Timestamps {
    _id: string;
    googleId?: string;
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    countryCode?: string;
    mobile?: string;
    refBy?: number;
    balance: number;
    password: string;
    image?: string;
    address?: string;
    status: boolean;
    pin: number;
    kycData?: string;
    kv: boolean;
    ev: boolean;
    sv: boolean;
    regStep: boolean;
    verCode?: string;
    verCodeSendAt?: Date;
    ts: boolean;
    tv: boolean;
    tsc?: string;
    banReason?: string;
    rememberToken?: string;
}

// Admin-related
interface Admin extends Timestamps {
    _id: string;
    name?: string;
    email?: string;
    username?: string;
    emailVerifiedAt?: Date;
    image?: string;
    password: string;
    rememberToken?: string;
}

// Product-related
interface ProductAttribute {
    _id: string;
    name: string;
    values: {
        value: string;
        price: number;
    }[];
}

interface Product extends Timestamps {
    _id: string;
    categoryId: string;
    deviceId?: string;
    platformId?: string;
    genreId?: string;
    title: string;
    slug?: string;
    image?: string;
    poster?: string;
    shortDescription: string;
    description: string;
    discount?: number;
    finalAmount: number;
    price: number;
    minimum?: string;
    recommended?: string;
    version?: number;
    rating: number;
    isTrending?: number;
    isPreOrder?: number;
    status: number;
    metaDescription?: string;
    backgroundImage?: string;
    accountEmail?: string;
    attributes: ProductAttribute[];
    images: string[];
}

// Order-related
interface OrderItem {
    productId: string;
    quantity: number;
    licenseKey?: string;
    attribute?: string;
}

interface Order extends Timestamps {
    _id: string;
    userId: string;
    topupId?: number;
    transactionId?: number;
    number: string;
    status: number;
    type: number;
    topupData?: string;
    quantity?: number;
    amount: number;
    currency?: string;
    items: OrderItem[];
}

// Transaction-related
interface Transaction extends Timestamps {
    _id: string;
    userId: string;
    amount: number;
    charge: number;
    postBalance: number;
    trxType?: string;
    trx?: string;
    details?: string;
    remark?: string;
}

// Wishlist-related
interface Wishlist extends Timestamps {
    _id: string;
    userId: string;
    productId: string;
}

// Notification-related
interface Notification extends Timestamps {
    _id: string;
    userId: number;
    title?: string;
    readStatus: boolean;
    clickUrl?: string;
}

// Support-related
interface SupportTicket extends Timestamps {
    _id: string;
    userId?: number;
    name?: string;
    email?: string;
    ticket?: string;
    subject?: string;
    status: boolean;
    priority: boolean;
    lastReply?: Date;
}

interface SupportMessage extends Timestamps {
    _id: string;
    supportTicketId: number;
    adminId: number;
    message?: string;
}

interface SupportAttachment extends Timestamps {
    _id: string;
    supportMessageId?: number;
    attachment?: string;
}

// Deposit-related
interface Deposit extends Timestamps {
    _id: string;
    userId: number;
    orderId: number;
    methodCode: number;
    amount: number;
    methodCurrency?: string;
    charge: number;
    rate: number;
    finalAmount: number;
    detail?: string;
    btcAmount?: string;
    btcWallet?: string;
    trx?: string;
    try: number;
    status: boolean;
    fromApi: boolean;
    adminFeedback?: string;
}

// General Settings-related
interface GeneralSettings extends Timestamps {
    _id: string;
    siteName?: string;
    curText?: string;
    curSym?: string;
    emailFrom?: string;
    emailTemplate?: string;
    smsBody?: string;
    smsFrom?: string;
    baseColor?: string;
    secondaryColor?: string;
    mailConfig?: string;
    smsConfig?: string;
    globalShortcodes?: string;
    kv: boolean;
    ev: boolean;
    en: boolean;
    sv: boolean;
    sn: boolean;
    forceSsl: boolean;
    maintenanceMode: boolean;
    securePassword: boolean;
    agree: boolean;
    registration: boolean;
    activeTemplate?: string;
    systemInfo?: string;
}

// Gateway-related
interface GatewayCurrency extends Timestamps {
    _id: string;
    name?: string;
    currency?: string;
    symbol?: string;
    methodCode?: number;
    gatewayAlias?: string;
    minAmount: number;
    maxAmount: number;
    percentCharge: number;
    fixedCharge: number;
    rate: number;
    image?: string;
    gatewayParameter?: string;
}

interface Gateway extends Timestamps {
    _id: string;
    formId: number;
    code?: number;
    name?: string;
    alias: string;
    status: boolean;
    gatewayParameters?: string;
    supportedCurrencies?: string;
    crypto: boolean;
    extra?: string;
    description?: string;
    paymentImage?: string;
}

// Logs and Audits
interface UserLogin extends Timestamps {
    _id: string;
    userId: number;
    userIp?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    longitude?: string;
    latitude?: string;
    browser?: string;
    os?: string;
}

interface NotificationLog extends Timestamps {
    _id: string;
    userId: number;
    sender?: string;
    sentFrom?: string;
    sentTo?: string;
    subject?: string;
    message?: string;
    notificationType?: string;
}

// Catalog-related
interface Category extends Timestamps {
    _id: string;
    name: string;
    isMenuItem?: number;
}

interface Genre extends Timestamps {
    _id: string;
    name: string;
    isMenuItem: number;
}

interface Platform extends Timestamps {
    _id: string;
    name: string;
    icon: string;
    isMenuItem?: number;
}

// License-related
interface LicenseKey extends Timestamps {
    _id: string;
    userId: number;
    productId: string;
    orderId: number;
    licenseKey: string;
    sellAmount?: number;
    soldAt?: Date;
    email?: string;
    accountEmail?: string;
    accessToken?: string;
    expiresIn?: string;
    refreshToken?: string;
    status: number;
}

// Ads and Top-ups
interface Ad extends Timestamps {
    _id: string;
    name: string;
    adCode: number;
    image: string;
    link: string;
    height: number;
    width: number;
}

interface TopUp extends Timestamps {
    _id: string;
    name: string;
    image?: string;
    description: string;
    servicesData: string;
    status: number;
    isTrending: number;
    appleStoreLink?: string;
    playStoreLink?: string;
    instruction?: string;
    instructionImage?: string;
}

// Language and Pages
interface Language extends Timestamps {
    _id: string;
    name?: string;
    code?: string;
    icon?: string;
    textAlign: boolean;
    isDefault: boolean;
}

interface Page extends Timestamps {
    _id: string;
    name?: string;
    slug?: string;
    tempname?: string;
    secs?: string;
    isDefault: boolean;
}

// Tokens and Audits
interface PersonalAccessToken extends Timestamps {
    _id: string;
    tokenableType: string;
    tokenableId: string;
    name: string;
    token: string;
    abilities?: string;
    lastUsedAt?: Date;
}

// Commission-related
interface CommissionLog extends Timestamps {
    _id: string;
    fromId: number;
    toId: number;
    level: string;
    amount: number;
    type: string;
    details: string;
    trx: string;
}

// Devices and Extensions
interface Device extends Timestamps {
    _id: string;
    name: string;
    icon: string;
    isMenuItem?: number;
}

interface Extension extends Timestamps {
    _id: string;
    act?: string;
    name?: string;
    description?: string;
    image?: string;
    script?: string;
    shortcode?: string;
    support?: string;
    status: boolean;
    deletedAt?: Date;
}

// Subscriptions
interface Subscriber extends Timestamps {
    _id: string;
    email?: string;
}

// Reviews
interface Review extends Timestamps {
    _id: string;
    userId: number;
    productId: string;
    rating: number;
    message?: string;
}

// Attributes
interface Attribute extends Timestamps {
    _id: string;
    name: string;
    values: AttributeValue[];
}

interface AttributeValue extends Timestamps {
    _id: string;
    attributeId: string;
    value: string;
}