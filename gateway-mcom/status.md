# Статус платежа

[[toc]]

## Получение статуса по ID платежа (payment_id)
 
Все параметры являются обязательными.

| Название   | Тип    | Описание                                     |
|------------|--------|----------------------------------------------|
| payment_id | string | Идентификатор платежа.                                   |
| token      | string | MD5 (merchant_id + payment_id + secret_word). |

## Получение статуса по полю поставщика (cf)

Все параметры являются обязательными.

| Название   | Тип    | Описание                                          |
|------------|--------|---------------------------------------------------|
| cf         | string | Код поставщика.                                   |
| product_id | string | ID продукта.                                      |
| token      | string | MD5 (merchant_id + product_id + cf + secret_word). |

## Ответ

| Название    | Тип    | Описание                                                                                        |
|-------------|--------|-------------------------------------------------------------------------------------------------|
| payment_id  | string | Идентификатор платежа.                                                                          |
| datetime    | string | Дата и время последнего изменения платежа по часовому поясу UTC в формате YYYY-MM-DD hh:mm:ssZ. |
| status      | string | Состояние платежа (см. [справочник](/gateway-mcom/dictionary.md)).                              |
| pp_identity | string | Идентификатор оператора (см. [справочник](/gateway-mcom/dictionary.md)).                                                               |
| cf          | string | Свободное поле.                                                                                 |
| cf2         | string | Свободное поле 2.                                                                               |
| additional  | array  | Дополнительные данные.                                                                          |