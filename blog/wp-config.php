<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'xiao9341_wp282');

/** MySQL database username */
define('DB_USER', 'xiao9341_wp282');

/** MySQL database password */
define('DB_PASSWORD', 'tHSfP41[[2');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'swaflppgiauwn8u9tdzonywtea3f2capnr4m0rnoz5amzvoitf0hswa8obxmeb3z');
define('SECURE_AUTH_KEY',  'jmre6gcnb955b8qlxqne8nkwspho7lwkfrck3fyeqm2nrnadkeclnpzdkcwcq0cu');
define('LOGGED_IN_KEY',    'admnhcotylqszwfznyv1hvv2grivo8v9lqcmxymtfcr129bg9bblctwku6skrysg');
define('NONCE_KEY',        'ow0bqhevvlg7nndorydcg1o0yhjuhtlhrvhvpee1v3qh4dcx5xegfsewhe0ixccm');
define('AUTH_SALT',        'egjcyctxylbokkysbsit243dgf8at4uktcvzwtt8fsje1lgojrhjo5qqwupmbow9');
define('SECURE_AUTH_SALT', 'fcfjlxk4nvva3aoly8l0x76mee7lpbzkx43jwnavyxixey4tdhm41gimjkyitn6w');
define('LOGGED_IN_SALT',   'lbjbybq7cltccionr3na55jiwommcfykbuznkoujq2m3wwv3oljvju9ldzsdfcup');
define('NONCE_SALT',       'i0mgy2ztq5mdc5nmfhnzfkn2qzowyxm2jmmdiwmtu2n2u0njhjm2y0zwyymzjkmm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ata_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define( 'WP_MEMORY_LIMIT', '128M' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

# Disables all core updates. Added by SiteGround Autoupdate:
define( 'WP_AUTO_UPDATE_CORE', false );
