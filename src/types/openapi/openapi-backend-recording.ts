/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/backend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update the recording status as a backend */
        post: operations["recording-backend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Store the recording */
        post: operations["recording-store"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        Capabilities: {
            features: string[];
            "features-local": string[];
            config: {
                attachments: {
                    allowed: boolean;
                    folder?: string;
                };
                call: {
                    enabled: boolean;
                    "breakout-rooms": boolean;
                    recording: boolean;
                    /** Format: int64 */
                    "recording-consent": number;
                    "supported-reactions": string[];
                    "predefined-backgrounds": string[];
                    "can-upload-background": boolean;
                    "sip-enabled": boolean;
                    "sip-dialout-enabled": boolean;
                    "can-enable-sip": boolean;
                    "start-without-media": boolean;
                    /** Format: int64 */
                    "max-duration": number;
                    "blur-virtual-background": boolean;
                };
                chat: {
                    /** Format: int64 */
                    "max-length": number;
                    /** Format: int64 */
                    "read-privacy": number;
                    "has-translation-providers": boolean;
                    "has-translation-task-providers": boolean;
                    /** Format: int64 */
                    "typing-privacy": number;
                    /** Format: int64 */
                    "summary-threshold": number;
                };
                conversations: {
                    "can-create": boolean;
                    "force-passwords": boolean;
                    /** @enum {string} */
                    "list-style": "two-lines" | "compact";
                    /** Format: int64 */
                    "description-length": number;
                };
                federation: {
                    enabled: boolean;
                    "incoming-enabled": boolean;
                    "outgoing-enabled": boolean;
                    "only-trusted-servers": boolean;
                };
                previews: {
                    /** Format: int64 */
                    "max-gif-size": number;
                };
                signaling: {
                    /** Format: int64 */
                    "session-ping-limit": number;
                    "hello-v2-token-key"?: string;
                };
            };
            "config-local": {
                [key: string]: string[];
            };
            version: string;
        };
        OCSMeta: {
            status: string;
            statuscode: number;
            message?: string;
            totalitems?: string;
            itemsperpage?: string;
        };
        PublicCapabilities: {
            spreed?: components["schemas"]["Capabilities"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    "recording-backend": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Recording status updated successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: unknown;
                        };
                    };
                };
            };
            /** @description Updating recording status is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                type: string;
                                error: {
                                    code: string;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
            /** @description Missing permissions to update recording status */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                type: string;
                                error: {
                                    code: string;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
            /** @description Room not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                type: string;
                                error: {
                                    code: string;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    "recording-store": {
        parameters: {
            query?: never;
            header: {
                /** @description Required to be true for the API request to pass */
                "OCS-APIRequest": boolean;
            };
            path: {
                apiVersion: "v1";
                token: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description User that will own the recording file. `null` is actually not allowed and will always result in a "400 Bad Request". It's only allowed code-wise to handle requests where the post data exceeded the limits, so we can return a proper error instead of "500 Internal Server Error". */
                    owner?: string | null;
                };
            };
        };
        responses: {
            /** @description Recording stored successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: unknown;
                        };
                    };
                };
            };
            /** @description Storing recording is not possible */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                error: string;
                            };
                        };
                    };
                };
            };
            /** @description Missing permissions to store recording */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ocs: {
                            meta: components["schemas"]["OCSMeta"];
                            data: {
                                type: string;
                                error: {
                                    code: string;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
}
