# Auto Login WIFI UGM

Auto login wifi ugm pada jam tertentu menggunakan cron job.

## Cara menggunakan

1. clone repository
2. setup environment variable
   - buat file `.env` dan isi username password dan url login.
   - contoh:

```env
LOGIN_USERNAME=yourusername
LOGIN_PASSWORD=your_pasword
LOGIN_URL=https://inter*****
CRON_JOB=10 1 * * *
```

3. install dependency

```bash
yarn
```

4. Running menggunakan node atau bisa menggunakan [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)

```
yarn start
# or
pm2 start index.js
```
