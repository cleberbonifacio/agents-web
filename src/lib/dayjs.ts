import lib from 'dayjs';
import 'dayjs/locale/pt-br'; // Import the Portuguese locale
import relativeTime from 'dayjs/plugin/relativeTime';

lib.locale('pt-br'); // Set the locale to Portuguese
lib.extend(relativeTime);

export const dayjs = lib;