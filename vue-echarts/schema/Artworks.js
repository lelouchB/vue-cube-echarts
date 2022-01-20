cube(`Artworks`, {
  sql: `SELECT * FROM public.artworks`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, date, widthCm, dateacquired]
    }
  },
  
  dimensions: {
    diameterCm: {
      sql: `${CUBE}."Diameter (cm)"`,
      type: `string`,
      title: `Diameter (cm)`
    },
    
    artistbio: {
      sql: `${CUBE}."ArtistBio"`,
      type: `string`
    },
    
    depthCm: {
      sql: `${CUBE}."Depth (cm)"`,
      type: `string`,
      title: `Depth (cm)`
    },
    
    title: {
      sql: `${CUBE}."Title"`,
      type: `string`
    },
    
    classification: {
      sql: `${CUBE}."Classification"`,
      type: `string`
    },
    
    date: {
      sql: `${CUBE}."Date"`,
      type: `string`
    },
    
    gender: {
      sql: `${CUBE}."Gender"`,
      type: `string`
    },
    
    seatHeightCm: {
      sql: `${CUBE}."Seat Height (cm)"`,
      type: `string`,
      title: `Seat Height (cm)`
    },
    
    durationSec: {
      sql: `${CUBE}."Duration (sec.)"`,
      type: `string`,
      title: `Duration (sec.)`
    },
    
    department: {
      sql: `${CUBE}."Department"`,
      type: `string`
    },
    
    accessionnumber: {
      sql: `${CUBE}."AccessionNumber"`,
      type: `string`
    },
    
    nationality: {
      sql: `${CUBE}."Nationality"`,
      type: `string`
    },
    
    circumferenceCm: {
      sql: `${CUBE}."Circumference (cm)"`,
      type: `string`,
      title: `Circumference (cm)`
    },
    
    url: {
      sql: `url`,
      type: `string`
    },
    
    heightCm: {
      sql: `${CUBE}."Height (cm)"`,
      type: `string`,
      title: `Height (cm)`
    },
    
    thumbnailurl: {
      sql: `${CUBE}."ThumbnailURL"`,
      type: `string`
    },
    
    weightKg: {
      sql: `${CUBE}."Weight (kg)"`,
      type: `string`,
      title: `Weight (kg)`
    },
    
    lengthCm: {
      sql: `${CUBE}."Length (cm)"`,
      type: `string`,
      title: `Length (cm)`
    },
    
    widthCm: {
      sql: `${CUBE}."Width (cm)"`,
      type: `string`,
      title: `Width (cm)`
    },
    
    dimensions: {
      sql: `${CUBE}."Dimensions"`,
      type: `string`
    },
    
    cataloged: {
      sql: `${CUBE}."Cataloged"`,
      type: `string`
    },
    
    medium: {
      sql: `${CUBE}."Medium"`,
      type: `string`
    },
    
    creditline: {
      sql: `${CUBE}."CreditLine"`,
      type: `string`
    },
    
    artist: {
      sql: `${CUBE}."Artist"`,
      type: `string`
    },
    
    dateacquired: {
      sql: `${CUBE}."DateAcquired"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
