// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type SpotifooInput = {
  /**
   * The search query's keywords. The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus `roadhouse blues` will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: `"roadhouse blues"` will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. The asterisk (`*`) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
   */
  query?: string;
};

export type Spotifoo = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for Spotify queries
     */
    spotify: {
      search: {
        tracks: Array<{
          /**
           * The Spotify ID for the track.
           */
          id: string;
          /**
           * The name of the track.
           */
          name: string;
          /**
           * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
           */
          artists: Array<{
            /**
             * The name of the artist.
             */
            name: string;
          }>;
        }>;
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchSpotifoo(
  variables: SpotifooInput,
  options?: NetlifyGraphFunctionOptions
): Promise<Spotifoo>;
