# Установка и запуск

Установка зависимостей

```shell
npm install
```


Запуска в режиме разработки

```shell
npm run start
```

# 1. Архитектура и структура

1. Вынесены UI-компоненты без логики в src/shared/ui
2. ButtonBack, LikeButton, LoadMore, Search, Sort вынесены в папку с фичами src/features
3. Добавлены абсолютные пути
