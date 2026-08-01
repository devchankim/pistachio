import { defaultLocale, locales, type Locale } from "@/content/config";

import { en } from "./en";
import { ko } from "./ko";
import type { Dictionary } from "./types";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { ko, en };

/**
 * 언어를 추가하려면
 *   1. config.ts 의 locales 에 코드 추가
 *   2. dictionaries/<코드>.ts 작성 (Dictionary 타입이 누락 키를 잡아 줍니다)
 *   3. 이 파일의 dictionaries 에 등록
 * 세 단계면 끝입니다.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export { defaultLocale, locales };
