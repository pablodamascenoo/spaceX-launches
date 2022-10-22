type Failure = {
  time?: number;
  altitude?: number;
  reason?: string;
};

export type Crew = {
  crew?: string;
  role?: string;
};

export type Launch = {
  name: string;
  flight_number: number;
  links: {
    patch: {
      small: string;
      large: string;
    };
    webcast: string;
  };
  success: boolean;
  failures: Failure[];
  details: string;
  crew: Crew[];
  date_unix: number;
  upcoming: boolean;
  id: string;
};
