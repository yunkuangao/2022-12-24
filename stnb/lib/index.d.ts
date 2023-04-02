import { Context, Schema, Logger } from 'koishi';
export declare const name = "stnb";
export declare const logger: Logger;
export interface Config {
    cmd: string;
}
export declare const Config: Schema<Config>;
export declare function compute(mode: number, time: number, bvs: number): string;
export declare const usage = "\n  ## \u6CE8\u610F\u4E8B\u9879\n  > \u672C\u63D2\u4EF6\u53C2\u8003\u81EA <a href=\"https://github.com/putianyi889/mmmh-wiki\">putianyi889 \u626B\u96F7\u672F\u8BED</a>\n  \u4EC5\u4F9B\u5B66\u4E60\u53C2\u8003\uFF0C\u8BF7\u52FF\u7528\u4E8E\u5546\u4E1A\u884C\u4E3A\n  \u5BF9\u4E8E\u90E8\u7F72\u8005\u884C\u4E3A\u53CA\u6240\u4EA7\u751F\u7684\u4EFB\u4F55\u7EA0\u7EB7\uFF0C Koishi \u53CA koishi-plugin-stnb \u6982\u4E0D\u8D1F\u8D23\u3002\n  \u5982\u679C\u6709\u66F4\u591A\u6587\u672C\u5185\u5BB9\u60F3\u8981\u4FEE\u6539\uFF0C\u53EF\u4EE5\u5728<a href=\"/locales\">\u672C\u5730\u5316</a>\u4E2D\u4FEE\u6539 zh \u5185\u5BB9\n  ";
export declare function apply(ctx: Context, config: Config): void;
