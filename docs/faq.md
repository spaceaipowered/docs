!!! warning "Это важно"
    Мы рекомендуем ознакомиться с этим разделом, прежде чем писать в поддержку. Возможно, ответ на ваш вопрос уже есть
    здесь.
## Зависла очередь запросов
**Вопрос:** Бот постоянно пишет, что у меня есть необработанные запросы, хотя прошло уже достаточно много времени. Что делать?

**Ответ:** Это баг, который будет пофикшен в следующем обновлении. Вы можете воспользоваться командой `/очистить-очередь`,
которая доступна раз в 15 минут, или подождать 1 час до сброса очереди.
## Бот не отвечает в канале
**Вопрос:** Я добавил бота на свой сервер и он не отвечает на мои сообщения. Что делать?

**Ответ:**

1. Для начала попробуйте @упомянуть бота вместе с вопросом.

2. Если первый способ не помогает, используйте команду `/хелп` и перейдите в раздел права. Если отсутствуют какие-то
необходимые права для работы, вы увидите это. Нужно предоставить боту все необходимые права.

3. Если 2 предыдущих способа не работают, попробуйте использовать команду `/пинг`. Если она не работает, вероятно, бот
на тех. перерыве или произошла непредвиденная ошибка. Ожидайте уведомлений на сервере поддержки.
## Бот отвечает ошибкой на все запросы
**Вопрос:** Бот отвечает ошибкой на все мои вопросы.

**Ответ:** Это проблемы на стороне провайдера API. Команда SpaceAI с этой ошибкой ничего сделать не может. Остаётся
только ждать. Как только всё будет исправлено, будет опубликовано уведомление на сервере поддержки.
## Как сделать, чтобы бот работал в канале
**Вопрос:** Как сделать так, чтобы бот отвечал на вопросы в канале без его @упоминания?

**Ответ:** Используйте команду `/без-упоминания` с параметром `Добавить текущий канал` в канале, в котором бот должен
отвечать без @упоминания.
## Как убрать бесконечные капчи
**Вопрос:** У меня появилась капча, я прохожу её и сразу появляется другая капча.

**Ответ:** Чтобы бот перестал выдавать капчи, сначала задайте другой вопрос или сбросьте историю диалога через команду
`/сброс`.
## Бот всегда говорит на английском языке
**Вопрос:** Бот всегда отвечает только на английском языке, даже когда я задаю вопросы на русском.

**Ответ:** У данной проблемы есть несколько решений.

1. Попробуйте попросить бота отвечать на русском. В большинстве случаев это должно сработать.

2. Если первый способ не работает, попробуйте отправить системное сообщение (через команду `/система`) с инструкцией
говорить на русском.

3. Если вы хотите, чтобы такие проблемы не повторялись даже после сброса истории диалога или перезагрузки бота, то
добавьте перманентное системное сообщение (через команду `/`правило). Чтобы оно применилось, используйте команду
`/сброс`. Системное сообщение, указанное в этой команде будет добавляться вначале каждого нового диалога.
