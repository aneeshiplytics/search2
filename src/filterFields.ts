export const DATE_FILTER_FIELDS = [
  'foundation_year',
  'date',
  'priority_date_earliest',
  'publication_date'
] as const;

export const RANGE_FIELDS = [
  'contribution_share',
  'investments_money_raised_usd'
] as const;
export const FILTER_FIELDS = [
  'country_search',
  'industry_sector',
  'industry_field',
  'granted',
  'active',
  'kind_type_short',
  'transferred',
  'litigated',
  'technology_generation',
  'release_array',
  'group_array',
  'pooled',
  'committee',
  'sso',
  'standards_type',
  'classification',
  'status',
  'data_provider',
  'country_search',
  'document_type',
  'language_array',
  'category_search',
  'discipline_search',
  'publisher_search',
  'source_search',
  'retrieved_from',
  'type',
  'country_code_search',
  ...DATE_FILTER_FIELDS,
  ...RANGE_FIELDS
] as const;

export type FilterField = typeof FILTER_FIELDS[number];
export type DateFilterField = typeof DATE_FILTER_FIELDS[number];
