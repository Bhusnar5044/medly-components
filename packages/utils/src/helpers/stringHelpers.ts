export const equalsIgnoreCase = (str1: string, str2: string) => str1.toLowerCase() === str2.toLowerCase();
export const includesIgnoreCase = (str1: string, str2: string) => str1.toLowerCase().includes(str2.toLowerCase());
export const includesIgnoreCaseInArray = (content: string[], str2: string) => content.some(str1 => includesIgnoreCase(str1, str2));
export const capitalize = (s: string) => s[0].toUpperCase() + s.substr(1);
