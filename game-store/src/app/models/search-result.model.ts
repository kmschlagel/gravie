export class SearchResponse {
  number_of_total_results?: number;
  results?: Result[];
}

export class Result {
  id: number;
  name?: string;
  description?: string;
  image?: ResultImage;
}

export class ResultImage {
  icon_url?: string;
  medium_url?: string;
}
