export const PAGE_PARTS: { [key: string]: any } = {
    calculator: { id: "calculator", title: "Калькулятор цен" },
    prices: { id: "prices", title: "Тарифы" },
    services: { id: "services", title: "Услуги" },
    express: { id: "express", title: "Экспресс проверка" },
    about: { id: "about", title: "О нас" },
    contact: { id: "contact", title: "Оставить заявку", titleExt: "Оставить заявку на консультацию" },
};

export const CONTACT_NUMBER = "+7 (777) 711-00-30";

export const COMPANY_NAME = "Report Partner";
export const COMPANY_TITLE = "Сфокусируйся на бизнесе, а мы позаботимся обо всем остальном.";
export const COMPANY_SUBTITLE = "Бухгалтерские, кадровые и юридические услуги.";
export const COMPANY_PHRASE = "Ваш партнер по бухучету";

export const DISCOUNT_VALUES = {
    VAT: "VAT",
    FEA: "FEA",
    trading_100: "trading_100",
};

export const DISCOUNT = 0.2;

export const CALC_VALUES = {
    modes: [
        {
            title: "ИП",
            price: 30000,
        },
        {
            title: "ТОО",
            price: 70000,
        },
    ],
    activityTypes: [
        {
            title: "Услуга",
            value: "service",
            price: 20000,
        },
        {
            title: "Производство",
            value: "production",
            price: 90000,
        },
        {
            title: "Торговля",
            options: [
                {
                    title: "до 30 операций",
                    value: "trading_30",
                    price: 30000,
                },
                {
                    title: "30-100 операций",
                    value: "trading_30_100",
                    price: 50000,
                },
                {
                    title: "от 100 операций",
                    value: DISCOUNT_VALUES.trading_100,
                    price: 100000,
                },
            ],
        },
    ],
    taxations: [
        {
            title: "НДС",
            value: DISCOUNT_VALUES.VAT,
            price: 40000,
        },
        {
            title: "ВЭД",
            value: DISCOUNT_VALUES.FEA,
            price: 40000,
        },
        {
            title: "Транспорт",
            value: "transport",
            price: 10000,
        },
        {
            title: "Имущество",
            value: "property",
            price: 10000,
        },
        {
            title: "Акциз",
            value: "excise",
            price: 40000,
        },
    ],
    staffs: [
        {
            title: "до 5",
            price: 10000,
        },
        {
            title: "до 10",
            price: 15000,
        },
        {
            title: "до 15",
            price: 20000,
        },
        {
            title: "от 15",
            price: 25000,
        },
    ],
};

const FREQUENCES = {
    once: "единовременно",
    daily: "ежедневно",
    weekly: "еженедельно",
    monthly: "ежемесячно",
    quarterly: "ежеквартально",
    halfYear: "полугодие",
    onceMonth: "1 раз в месяц",
    onceQuarter: "1 раз в квартал",
    onceHalfYear: "1 раз в полугодие",
    onceYear: "1 раз в год",
    necessary: "по необходимости",
    constantly: "постоянно",
    periodically: "периодически",
};

type PackageType = {
    id: string;
    frequency?: string;
    text?: string;
};

export type ServiceType = {
    title: string;
    frequency?: string;
    packages?: PackageType[];
    subservices?: ServiceType[];
    expand?: ServiceType[];
};

type ServicesPackType = {
    title: string;
    packageId: "starting" | "operating";
    services: ServiceType[];
}[];

const PACKAGES = {
    start: {
        id: "start",
        title: "Старт",
        price: 40000,
    },
    start_p: {
        id: "start_p",
        title: "Старт+",
        price: 100000,
    },
    basic: {
        id: "basic",
        title: "Базовый",
        subtitle: "для ИП",
        price: 70000,
    },
    standart: {
        id: "standart",
        title: "Стандарт",
        price: 180000,
    },
    standart_p: {
        id: "standart_p",
        title: "Стандарт+",
        price: 250000,
    },
    business: {
        id: "business",
        title: "Бизнес",
        price: 350000,
    },
} as { [key: string]: { id: string; title: string; subtitle?: string; price: number } };

export const PACKAGES_HEADING = {
    starting: [PACKAGES.start, PACKAGES.start_p],
    operating: [PACKAGES.basic, PACKAGES.standart, PACKAGES.standart_p, PACKAGES.business],
};

const JOINER = " / ";

export const ALL_PACKAGES: ServicesPackType = [
    {
        title: "Начало бизнеса",
        packageId: "starting",
        services: [
            {
                title: "Бухучет",
                subservices: [
                    {
                        title: "Создание базы 1C",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Первичная настройка базы 1C под вид деятельности",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Открытие счетов в банке",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Настройка интернет-банкинга",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Первичная консультация по началу деятельности (1 час)",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                ],
            },
            {
                title: "Налоговый учет",
                subservices: [
                    {
                        title: "Регистрация на сайтах ИСЭСФ, егов",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Получение ЭЦП",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Шпаргалки по сдаче отчетности (сроки и формы)",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                ],
            },
            {
                title: "Статистика",
                subservices: [
                    {
                        title: "Получение первичной информации по сдаче отчетности",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                ],
            },
            {
                title: "Кадры",
                subservices: [
                    {
                        title: "Регистрация на енбек.кз",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Шаблоны приказов, ТД",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Инструктаж и шаблоны формирования личных дел",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                ],
            },
            {
                title: "Юр. услуги",
                subservices: [
                    {
                        title: "Открытие ТОО/ИП",
                        packages: [{ id: PACKAGES.start.id }, { id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Выезд в нотариус и пакет учредительных документов",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                    {
                        title: "Шаблоны договоров на услуги, товары и т.д.",
                        packages: [{ id: PACKAGES.start_p.id }],
                    },
                ],
            },
        ],
    },
    {
        title: "Действующие",
        packageId: "operating",
        services: [
            {
                title: "Бухучет",
                subservices: [
                    {
                        title: "1C",
                        subservices: [
                            {
                                title: "Создание и первичная настройка базы 1С",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.once,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.once,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.once,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.once,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Банк",
                        subservices: [
                            {
                                title: "Подготовка реестров платежей Excel в и SWIFT",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.weekly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.weekly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.weekly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.daily,
                                    },
                                ],
                            },
                            {
                                title: "Ведение он-лайн банкинга",
                                expand: [
                                    {
                                        title: "Платежи",
                                        packages: [
                                            {
                                                id: PACKAGES.standart.id,
                                                frequency: FREQUENCES.weekly,
                                            },
                                            {
                                                id: PACKAGES.standart_p.id,
                                                frequency: FREQUENCES.weekly,
                                            },
                                            {
                                                id: PACKAGES.business.id,
                                                frequency: FREQUENCES.daily,
                                            },
                                        ],
                                    },
                                    {
                                        title: "Валютные операции",
                                        expand: [
                                            {
                                                title: "Подготовка конвертации валютных операций",
                                                packages: [
                                                    {
                                                        id: PACKAGES.standart_p.id,
                                                        frequency: FREQUENCES.necessary,
                                                    },
                                                    {
                                                        id: PACKAGES.business.id,
                                                        frequency: FREQUENCES.necessary,
                                                    },
                                                ],
                                            },
                                            {
                                                title: "Присвоение УНК к договорам",
                                                packages: [
                                                    {
                                                        id: PACKAGES.standart_p.id,
                                                        frequency: FREQUENCES.necessary,
                                                    },
                                                    {
                                                        id: PACKAGES.business.id,
                                                        frequency: FREQUENCES.necessary,
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Обработка данных по расчетным счетам в 1С",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Касса и авансовые отчеты",
                        subservices: [
                            {
                                title: "WEB-касса (регистрация) оплата отдельно",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: [FREQUENCES.once, FREQUENCES.necessary].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: [FREQUENCES.once, FREQUENCES.necessary].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: [FREQUENCES.once, FREQUENCES.necessary].join(JOINER),
                                    },
                                ],
                            },
                            {
                                title: "Расходные и приходные операции (ККМ чек)",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Обработка данных по кассе в 1С",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Оформление авансовых отчетов",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "до 5 операций",
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "до 10 операций",
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "10-20 операций",
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "от 20 операций",
                                    },
                                ],
                            },
                            {
                                title: "Формирование и прошивка кассовой книги за период",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Учет расчетов с поставщиками",
                        subservices: [
                            {
                                title: "Оформление первичных документов в 1С (поставщики, покупатели)",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "до 20 операций",
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "до 50 операций",
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "50-100 операций",
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                        text: "от 100 операций",
                                    },
                                ],
                            },
                            {
                                title: "Формирование и проверка актов сверок с контагентами",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: [FREQUENCES.quarterly, FREQUENCES.halfYear].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: [FREQUENCES.quarterly, FREQUENCES.halfYear].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.monthly,
                                    },
                                ],
                            },
                            {
                                title: "Проверка Дебиторской и кредиторской задолженности",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: [FREQUENCES.quarterly, FREQUENCES.halfYear].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: [FREQUENCES.quarterly, FREQUENCES.halfYear].join(JOINER),
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.monthly,
                                    },
                                ],
                            },
                            {
                                title: "Выдача и регистрация доверенностей",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Учет ОС и НМА",
                        subservices: [
                            {
                                title: "Поступление, перемещение, выбытиеи начисление амортизации ОС И НМА в 1С",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Инвентаризация",
                                expand: [
                                    {
                                        title: "частичная",
                                        packages: [
                                            {
                                                id: PACKAGES.standart_p.id,
                                                frequency: FREQUENCES.onceYear,
                                            },
                                            {
                                                id: PACKAGES.business.id,
                                                frequency: [FREQUENCES.onceYear, FREQUENCES.necessary].join(JOINER),
                                            },
                                        ],
                                    },
                                    {
                                        title: "полная с выездом",
                                        packages: [
                                            {
                                                id: PACKAGES.business.id,
                                                frequency: [FREQUENCES.onceYear, FREQUENCES.necessary].join(JOINER),
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Учет ТМЗ",
                        subservices: [
                            {
                                title: "Поступление, перемещение, списание ТМЗ в 1С",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Инвентаризация",
                                expand: [
                                    {
                                        title: "частичная",
                                        packages: [
                                            {
                                                id: PACKAGES.standart_p.id,
                                                frequency: FREQUENCES.necessary,
                                            },
                                            {
                                                id: PACKAGES.business.id,
                                                frequency: [FREQUENCES.onceYear, FREQUENCES.necessary].join(JOINER),
                                            },
                                        ],
                                    },
                                    {
                                        title: "полная с выездом",
                                        packages: [
                                            {
                                                id: PACKAGES.business.id,
                                                frequency: [FREQUENCES.onceYear, FREQUENCES.necessary].join(JOINER),
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: "Калькуляция себестоимости",
                                packages: [
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.periodically,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Расчет заработной платы",
                        subservices: [
                            {
                                title: "Расчет заработной платы, отпускных, больничных и прочих выплат сотрудникам",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Формирование платежных ведомостей по зарплате",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Формирование и подготовка к выплате налогов по зарплате",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Подготовка справок для сотрудников",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                ],
                            },
                            {
                                title: "Оформление командировочных удостоверений",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: "Налоговый учет",
                subservices: [
                    {
                        title: "Сдача налоговых форм",
                        subservices: [
                            {
                                title: "Декларация по НДС 300.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Декларация по ИПН и соц. налогу 200.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Расчет текущих платежей по налогу на имущество 701.03",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Расчет текущих платежей по налогу на транспорт 701.01",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Расчет текущих платежей по налогу на землю 701.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Декларация по КПН 100.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                ],
                            },
                            {
                                title: "Декларация по плате за загрязнение окружающей среды 870.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Декларация по земельному налогу, налогу на транспорт, и налогу на имущество 700.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceYear,
                                    },
                                ],
                            },
                            {
                                title: "Декларация для субъектов малого и среднего бизнеса 910.00",
                                packages: [
                                    {
                                        id: PACKAGES.basic.id,
                                        frequency: FREQUENCES.onceHalfYear,
                                    },
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.onceHalfYear,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceHalfYear,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceHalfYear,
                                    },
                                ],
                            },
                            {
                                title: "Прочие налоговые декларации",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                ],
                            },
                            {
                                title: "Формирование налоговых регистров к декларациям",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Консультаии по оптимизации налоговых расходов",
                                packages: [
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.periodically,
                                    },
                                ],
                            },
                            {
                                title: "Заявление о ввозе товаров и уплате косвенных налогов 328.00",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.constantly,
                                    },
                                ],
                            },
                            {
                                title: "Расчет по корпоративному налогу удерживаемому у источника выплаты с дохода нерезидента 101.04",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.onceQuarter,
                                    },
                                ],
                            },
                            {
                                title: "Получение справки резиденства",
                                packages: [
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                ],
                            },
                            {
                                title: "Получение справок об отсутствии налоговой задолженности",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.necessary,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: "Управленческий Финансовый учет",
                subservices: [
                    {
                        title: "Планирование и составление бюджета (продаж, расходов, движение денег)",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                    {
                        title: "Формирование календаря оплат (ежедневно, ежемесячно, ежеквартально) Cash Flow",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                    {
                        title: "Формирование финансовой отчетности",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                    {
                        title: "Ведение аналитического учета по затратам",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                    {
                        title: "Формирование отчета о прибылях и убытках (PL) (ежемесячно? Ежеквартально и т.д.)",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                    {
                        title: "Составление управленческой отчетности в разрезе деятельности (расходы и доходы) отдельно и по группе компаний",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Статистика",
                subservices: [
                    {
                        title: "Сдача стандартной отчетности по виду деятельности",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: [FREQUENCES.onceMonth, FREQUENCES.onceQuarter].join(JOINER),
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: [FREQUENCES.onceMonth, FREQUENCES.onceQuarter].join(JOINER),
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: [FREQUENCES.onceMonth, FREQUENCES.onceQuarter].join(JOINER),
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: [FREQUENCES.onceMonth, FREQUENCES.onceQuarter].join(JOINER),
                            },
                        ],
                    },
                    {
                        title: "Дополнительные отчеты по выборке",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.necessary,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.necessary,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.necessary,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Кадры",
                subservices: [
                    {
                        title: "Формирование личных дел сотрудников с соответствии с требованиями ТК РК",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Регистрация ТД на сайте енбек.кз",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Приказы (прием, увольнение, отпуска и т.д.)",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Приказы на командировкии ком.удостоверения",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Штатное расписание",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Табелирование",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Формирование мотивационной политики сотрудников",
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Административные процедуры",
                subservices: [
                    {
                        title: "Обновление базы 1С",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Формирование учетных регистров по документации",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: "Постоянная вовлеченность в процессы ведения бизнеса (WhatsApp группа) с 9.00-18.00",
                        packages: [
                            {
                                id: PACKAGES.basic.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                            },
                        ],
                    },
                    {
                        title: 'Консультации по важным вопросам "здесь и сейчас" с 9.00-18.00',
                        packages: [
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Юр. услуги",
                subservices: [
                    {
                        title: "Открытие ТОО/ИП",
                        expand: [
                            {
                                title: "без учредительных документов",
                                packages: [
                                    {
                                        id: PACKAGES.standart.id,
                                        frequency: FREQUENCES.once,
                                    },
                                    {
                                        id: PACKAGES.standart_p.id,
                                        frequency: FREQUENCES.once,
                                    },
                                ],
                            },
                            {
                                title: "с учредительными документами",
                                packages: [
                                    {
                                        id: PACKAGES.business.id,
                                        frequency: FREQUENCES.once,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Перерегистрация ИП ТОО, юр. адрес, директор (решение и приказ учредителя)",
                        packages: [
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.once,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.once,
                            },
                        ],
                    },
                    {
                        title: "Подготовка договоров до 3-х страниц",
                        packages: [
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                                text: "до 5 договоров",
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                                text: "до 10 договоров",
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                                text: "от 10 договоров",
                            },
                        ],
                    },
                    {
                        title: "Проверка договоров от 4-х до 6 страниц",
                        packages: [
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.constantly,
                                text: "до 5 договоров",
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.constantly,
                                text: "до 10 договоров",
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.constantly,
                                text: "от 10 договоров",
                            },
                        ],
                    },
                    {
                        title: "Дополнительные услуги",
                        packages: [
                            {
                                id: PACKAGES.standart.id,
                                frequency: FREQUENCES.necessary,
                            },
                            {
                                id: PACKAGES.standart_p.id,
                                frequency: FREQUENCES.necessary,
                            },
                            {
                                id: PACKAGES.business.id,
                                frequency: FREQUENCES.necessary,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export type TeamMemberInfoType = {
    fullname: string;
    image: string;
    position: string;
    subposition?: string;
    content?: (string | string[])[];
};

export const TEAM_MEMBERS: TeamMemberInfoType[] = [
    {
        fullname: "Шахворостова (Камдина) Алевтина",
        image: "/portrait1.webp",
        position: "Директор направления аутсорсинговых услуг",
        subposition: "Профессиональный бухгалтер РК, Дип ИФР, САР, CIPA, Финансовый директор",
        content: [
            "Стаж работы 20 лет в крупных международных компаниях с разными видами и критериями деятельности одни из которых Samsung, Теле2, в должности не только Главного бухгалтера, но и финансового директора.",
            [
                "Успешное прохождение налоговых и аудиторских проверок (BIG4)",
                "Умение снижать налоговую нагрузку компании",
                "Автоматизация бизнес процессов (автоматизация расчета заработной платы и кадровое делопроизводство на 2500 человек, разработка и внедрение модуля в 1С по упрощению списания медикаментов)",
                "Быстрая адаптация к внешним изменениям",
                "Ежегодное повышение квалификации",
                "Ведение и составление консолидированной финансовой отчетности группы компаний",
                "Привлечение инвестиций и разработка инвестиционных планов",
                "Разработка учетной политики по стандартам НСФО",
                "Победитель конкурса «ГроссБух»",
            ],
        ],
    },
    {
        fullname: "Комаровская Анастасия",
        image: "/portrait2.webp",
        position: "Ведущий бухгалтер",
        subposition: "Профессиональный бухгалтер РК, бакалавр – Бухгалтерского учета, бакалавр – Организационная психология",
        content: [
            [
                "Опыт работы в крупных международных компаниях 6 лет",
                "Постоянный мониторинг изменений в Налоговом законодательстве",
                "Навык Работы в режиме многозадачности",
                "Новаторское мышление и тяга к повышению квалификации",
                "Внедрение нового программного обеспечения в компании",
            ],
        ],
    },
    {
        fullname: "Шушунова Юлия",
        image: "/portrait3.webp",
        position: "Юрист",
        subposition: "Бакалавр юриспруденции, обладатель красного диплома, образование НУ «Туран» 2009-2013 год",
        content: [
            "Стаж по профессии – 10 лет, с 2013 года юрист одной из крупнейших Дистрибьюторских компаний Республики Казахстан.",
            "Повышение квалификации:",
            [
                "2016 года – Курс бухгалтерского учета, с присвоением квалификации «Помощник бухгалтера»",
                "2018 года – Курс основы кадрового делопроизводства",
            ],
            "Профессиональные навыки: нестандартный подход к решению вопросов, креативное мышление, знание законодательства, судебная практика.",
        ],
    },
];
