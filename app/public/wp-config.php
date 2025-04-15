<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '4S1uKe7?/OrAwRM+1nL E#IV^;G~={Tl<up fWe$|JM*avQ{/KRwGLOE%X1K-/ph' );
define( 'SECURE_AUTH_KEY',   '|,/=q:$wwVVea;=;F]k/*7!S=/Y<ZL|w5Zzy2o>R9FiiM7s~9Y2g]@{},OOn{a9q' );
define( 'LOGGED_IN_KEY',     'J -7ivFrl]Y #[zG?/IJ]K3#D(--Q(dm??~_jBPMnuJr6^O3HK|<I1LKV >iL<}9' );
define( 'NONCE_KEY',         '-+fl+UmPR0UZ)mQQVT[l<Bj>ZDO`8l`@.os$86{tnDi$Lm-}[(wjI)Y^W22d=W4V' );
define( 'AUTH_SALT',         'f:<#.rHrutgZ<;iKW1=xF:T%0UZ~jA2xS}H@LAxfDA1}*.o0ZnjGIMzsA^`4rP5p' );
define( 'SECURE_AUTH_SALT',  'UEgG=mW&!M=Vto=Ow]Uzd2XI0|p|/ij(nQ*B)w:B[7>^C5qC,Fj1}te_9sUI`?{|' );
define( 'LOGGED_IN_SALT',    '>GrHkHAAwwuoe bGm{tQR6(Br<~b^?<K{L3=5E,Kk,qQMd5[+4>=0gsJq5_~DvXL' );
define( 'NONCE_SALT',        'U>4V{ra|K~}eHFu:yb*Ap>U&x=u0!@FkhE{,(b@0(c$A![6 bbGm@YG)>JKw4%J%' );
define( 'WP_CACHE_KEY_SALT', '!Js)Y&dYm!$+uanl6Y<4fMJ9D-bx^e57(ga,?fm8Y!s5mhZpt|x:#,g6FvH[u~_:' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
