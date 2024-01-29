/**
 * 1. OPTIONS
 * 
 * HTTP Метод OPTIONS запрашивает информацию
 * об опциях соединения. Идемпотентен.
 * Не имеет тела. Не кешируемый.
 * 
 * Если ответ сервера - это не сообщение об ошибке, 
 * то ответ НЕ ДОЛЖЕН содержать иной информации объекта, 
 * кроме той, которую можно рассматривать как опции соединения 
 * (например Allow - можно рассматривать как опцию соединения, 
 * а Content-Type - нет). 
 * 
 * Если Request-URI - * то запрос OPTIONS предназначен для обращения к серверу в целом.
 * Если код ответа:
 * 200 - то ответу СЛЕДУЕТ содержать любые поля заголовка, 
 * которые указывают опциональные возможности, реализуемые сервером.
 * 
 * Если Request-URI - != * то запрос OPTIONS применяется к опциям, которые доступны при соединении с указанным ресурсом.
 * Если код ответа:
 * 200- то ответу СЛЕДУЕТ содержать любые поля заголовка, которые указывают опциональные возможности, 
 * реализуемые сервером и применимые к указанному ресурсу (например, Allow).
 * 
 * Синтаксис
 * OPTIONS /index.html HTTP/1.1
 * OPTIONS * HTTP/1.1
 * 
 * https://developer.mozilla.org/ru/docs/Web/HTTP/Methods/OPTIONS
 * https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.7
 */ 

/**
 * 2. HTTP 3.0
 * HTTP/3 (ранее известный как HTTP-over-QUIC).
 * Позволяет мультиплексировать несколько потоков данных между двумя компьютерами, 
 * работая поверх протокола UDP, и содержит возможности шифрования, 
 * эквивалентные TLS и SSL. Имеет более низкую задержку соединения и передачи, чем TCP. 
 * HTTP-сервер может объявить клиенту о поддержке протокола QUIC с помощью дополнительного заголовка «Alternate-Protocol: 80:quic» или «Alternate-Protocol: 443:quic»
 * Даунгрейд на ранние версии.
 * 
 * 
 * 
 * https://datatracker.ietf.org/doc/rfc9114/
 * https://www.cloudflare.com/learning/performance/what-is-http3/
 */

// 3.

/// string
const str1 = 'some string'
const str2 = String('some string')
const str3 = `${33 + 44 + ' some text'}`

/// number

const num1 = 123
const num2 = +'123'
const num3 = Number('1234')

/// boolean

const bool1 = true
const bool2 = !'true'
const bool3 = Boolean(0)
const bool4 = Boolean('abc')
const bool5 = !!2
const bool6 = 1>2 // 1 == 2

/// null

const addNull = null
document.getElementById('non-existent element')

/// undefined

const undef = undefined
let undefined
var undef3

/// symbol

const symbol1 = Symbol()
const symbol2 = Symbol.for('token')

/// bigInt

const bigInt1 = BigInt(1)
const bigInt2 = 1n

/////////////////////////


/**
 * 4. 
 * 
 * Из-за  Temporal Dead Zone.
 * А 'var' будет undefined
 * 
 */


// 5.
const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNan

const res2 = (true && 3) + "d";
console.log(res2); // 3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); // trued