import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import querystring from 'querystring';

export interface Parameters {
    auth_key: string;
    text: string;
    source_lang?: 'DE' | 'EN' | 'FR' | 'IT' | 'JA' | 'ES' | 'NL' | 'PL' | 'PT' | 'RU' | 'ZH';
    target_lang: '';
    split_sentences?: '0' | '1' | 'nonewlines';
    preserve_formatting?: '0' | '1';
    formality?: 'default' | 'more' | 'less';
    tag_handling?: string[];
    non_splitting_tags?: string[];
    outline_detection?: string;
    splitting_tags?: string[];
    ignore_tags?: string[];
}

export interface Response {
    translations: {
        detected_source_language: string;
        text: string;
    }[];
}

async function translate(parameters: Parameters): Promise<AxiosResponse<Response>> {
    return axios.post('https://api.deepl.com/v2/translate', querystring.stringify(parameters));
}

export default translate;
