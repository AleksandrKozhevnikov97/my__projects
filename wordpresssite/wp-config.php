<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'alextest' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'Sid' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'Theclash97' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.w?Mh:6J<j}(n~}zO=7q>HO=]2NDYgr.w&E6dcdg&bs@h<(Zf2Qr CH-77~Dpc|l' );
define( 'SECURE_AUTH_KEY',  'h:7V;TKf<|J}TZ|^#P!bj5*g8RF4EX{Dhhruiz_9GnkM9,td(c}FX]n9p^)Xh#P|' );
define( 'LOGGED_IN_KEY',    '1X`h-i<>qEV_P#9-r[*>}{Lrgak-isQ>OQGVV7wdc&V6I{Oeaod+L</GiCT ] n^' );
define( 'NONCE_KEY',        'G`7$hBtgl)DdkJ9pQCNXc7>SF<zj}pj*K_/;qI58I*k|yT)PG-C]bBT0!|ShN+zl' );
define( 'AUTH_SALT',        '6yXh_t(a4W)1NtMWJ?e-;gf_8lVKYSTa@nlPGq=B7T}z1<TkAIRz5++<2;&<CN2G' );
define( 'SECURE_AUTH_SALT', 'p#vUf:%ZW]Ml{q|#@<eJUcE/$7>DY.uD]d!xs7s[$Y[lSI#1=PftS#ppr:A$jo{v' );
define( 'LOGGED_IN_SALT',   'M08zQX^Yxd&paJN*2,_t?<4OZLNZF2ku0bpk4R4;c/8Fl^*5 G`)q1c<fr};Ha&L' );
define( 'NONCE_SALT',       'zK!l0sE>#]z}u).mTkfvyej~]%;6QdXt!^VJra@#<wuu-nF=R%jC0W{k1G[V?]Tx' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
