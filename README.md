# phone-book-app
Приложение, написанное с помощью Ionic framework с использованием Angular

## 1. Предварительные установки
- Node.js v20+ (желательно)
- npm 10+
- XCode

## 2. Начало работы
 2.1 Чтобы скачать проект клонируем репозиторий:
 ```bash
 git clone https://github.com/ZizaKr/phone-book-app.git
 ```
 2.2 Заходим в папку:
 ```bash
 cd PhoneBookApp
 ```
2.3 Устанавливаем все зависимости:
 ```bash
 npm install
 ```

2.4 Запускаем приложение с помощью команды: 
```bash
 ng serve
 ```
Эта команда запустит сервер(nodejs). Приложение будет доступно в браузере по адресу http://localhost:4200/login
 
 2.6 А также можно запустить приложение с помощью команды:
 ```bash
 ionic serve
 ```
 Приложение будет доступно в браузере по адресу http://localhost:8100/login

## 3. Использование
3.1 После запуска сервера, заходим в браузере по адресу:
http://localhost:8100/login и видим страницу аутентификации 
<img width="756" alt="Screenshot 2023-10-24 at 05 28 52" src="https://github.com/ZizaKr/phone-book-app/assets/70637340/94934cd9-b69b-4f78-8056-c9ad9476b9ea">

 
3.2 Email и password для аутентификации можно посмотреть в src/app/services/auth.service.ts Заполняем поля, нажимаем Login и переходим на следующую страницу 'home'.

3.3 На странице 'home' будет отображен список контактов из телефона. Но для этого нужно создать, подготовить и открыть приложение на iOS, чтобы получить данные из телефона: 
  ```bash
ionic build
ionic cap add ios
ionic cap sync ios
ionic cap open ios
 ```
3.3.1 Внутри файла 'Info.plist'(находится в 'ios/App/App/Info.plist') добавляем следующие ключи:
```bash
...
<dict>
    <key>NSCameraUsageDescription</key>
    <string>The app enables the scanning of various barcodes.</string>
    <key>NSContactsUsageDescription</key>
    <string>To allow access to the Contacts list</string>
    ...
</dist>    
 ```
3.4 После открытия приложения в XCode, запустить его в симуляторе или соединенном девайсе к Mac, возможно, не получится сразу. 
3.4.1 В XCode переходим в 'Signing & Capabilities' и  выбираем Apple Developer account
<img width="1174" alt="Screenshot 2023-10-24 at 06 48 01" src="https://github.com/ZizaKr/phone-book-app/assets/70637340/2de4ab51-8e0a-49f1-97c5-fa912b2b3bda">

3.5 Если проблемы не возникают с аккаунтом, то благополучно запускаем приложение на одном из симуляторов. <img width="473" alt="2photo" src="https://github.com/ZizaKr/phone-book-app/assets/70637340/08e02d2c-f27c-4c6b-b665-3df958ed9dbb">

3.6 Заполняем данные, переходим на следующую страницу 'home'. При запуске страницы 'home', приложение запрашивает доступ к контактам из телефона(тут я уже запускаю приложение в своем девайсе, соединенным к Mac): ![IMG_6384](https://github.com/ZizaKr/phone-book-app/assets/70637340/2c90f320-f1ea-430c-81f2-5016de601cef)

3.7 Получаем список контактов из телефона:
![IMG_6385](https://github.com/ZizaKr/phone-book-app/assets/70637340/fda30775-920e-4b05-9fab-f5fcfe8dcde3)

3.8 Нажимаем на иконку сверху справа и открывается камера телефона. Наводим на Qr code и сканируем. Содержимое Qr кода выводим с помощью alert: ![IMG_6386](https://github.com/ZizaKr/phone-book-app/assets/70637340/97bbb9a1-dfd6-49fd-a046-af0fa2fadf39)

