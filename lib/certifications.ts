export const R2_PUBLIC_BASE = "https://pub-091a142b5c9e4af083db4d5d261514f7.r2.dev"

export type CertificationTrack = "IBM Data Engineering" | "Microsoft Fabric" | "Apache Spark" | "Snowflake"

export type CertificationAsset = {
  key: string
  title: string
  issuer?: string
  track: CertificationTrack
  featured?: boolean
  kind: "image" | "pdf" | "other"
  src: string
}

const IMAGE_EXT = new Set(["png", "jpg", "jpeg", "webp", "gif", "avif", "svg"])
const PDF_EXT = new Set(["pdf"])

export function publicObjectUrl(key: string) {
  const encoded = key
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  return `${R2_PUBLIC_BASE}/${encoded}`
}

export function titleFromKey(key: string) {
  const file = key.split("/").pop() || key
  const withoutExt = file.replace(/\.[^.]+$/, "")
  return decodeURIComponent(withoutExt)
    .replace(/^(Certificat|Certificate|Certification)\s+/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function kindFromKey(key: string): CertificationAsset["kind"] {
  const ext = key.split(".").pop()?.toLowerCase() || ""
  if (IMAGE_EXT.has(ext)) return "image"
  if (PDF_EXT.has(ext)) return "pdf"
  return "other"
}

type CatalogEntry = {
  key: string
  title: string
  issuer: string
  track: CertificationTrack
  featured?: boolean
}

export const certificationCatalog: CatalogEntry[] = [
  {
    key: "Certification IBM Data Engineering.pdf",
    title: "IBM Data Engineering Professional Certificate",
    issuer: "IBM",
    track: "IBM Data Engineering",
    featured: true,
  },
  {
    key: "Certificat Introduction Data Engineering.pdf",
    title: "Introduction to Data Engineering",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Python for Data Science, AI & Development.pdf",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Python Project for Data Engineering.pdf",
    title: "Python Project for Data Engineering",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Introduction to relational databases.pdf",
    title: "Introduction to Relational Databases",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Databases and SQL for Data Science with Python.pdf",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Hands-on Introduction to Linux Commands and Shell Scripting.pdf",
    title: "Linux Commands and Shell Scripting",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Relational Database Administration.pdf",
    title: "Relational Database Administration",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat ETL and Data Pipelines with Shell, Airflow and Kafka.pdf",
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Data Warehouse Fundamentals.pdf",
    title: "Data Warehouse Fundamentals",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat BI Dashboards with Cognos Analytics and Google Looker.pdf",
    title: "BI Dashboards with Cognos Analytics and Google Looker",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Introduction to NoSQL Databases.pdf",
    title: "Introduction to NoSQL Databases",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Introduction to Big Data with Spark and Hadoop.pdf",
    title: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Machine Learning with Apache Spark.pdf",
    title: "Machine Learning with Apache Spark",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Data Engineering Capstone Project.pdf",
    title: "Data Engineering Capstone Project",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificate Generative AI, Elevate your Data Engineer Career.pdf",
    title: "Generative AI: Elevate your Data Engineering Career",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Data Engineering Career Guide and Interview Preparation.pdf",
    title: "Data Engineering Career Guide and Interview Preparation",
    issuer: "IBM · Coursera",
    track: "IBM Data Engineering",
  },
  {
    key: "Certificat Apache Spark with Scala Master Data Building & Analysis.pdf",
    title: "Apache Spark with Scala — Data Building & Analysis",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Certificat Apache Spark Design & Execute ETL Pipelines Hands-on.pdf",
    title: "Apache Spark — Design & Execute ETL Pipelines",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Certificat Apache Spark Apply & Evaluate Big Data Workflows.pdf",
    title: "Apache Spark — Apply & Evaluate Big Data Workflows",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Certificat PySpark & Python Hands-On Guide To Data Processing.pdf",
    title: "PySpark & Python — Hands-On Data Processing",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Certificat PySpark Apply & Analyze Advanced Data Processing.pdf",
    title: "PySpark — Advanced Data Processing",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Cerificat PySpark Apply & Evaluate Predictive ML Models.pdf",
    title: "PySpark — Apply & Evaluate Predictive ML Models",
    issuer: "Coursera",
    track: "Apache Spark",
  },
  {
    key: "Certificat Introduction to Modern Data Engineering with Snowflake.pdf",
    title: "Introduction to Modern Data Engineering with Snowflake",
    issuer: "Snowflake · Coursera",
    track: "Snowflake",
    featured: true,
  },
  {
    key: "Certificat Fabric Foundations and Environnement Management.pdf",
    title: "Fabric Foundations and Environment Management",
    issuer: "Microsoft",
    track: "Microsoft Fabric",
  },
  {
    key: "Certificat Preparing Data for Analytics in Microsoft Fabric.pdf",
    title: "Preparing Data for Analytics in Microsoft Fabric",
    issuer: "Microsoft",
    track: "Microsoft Fabric",
  },
  {
    key: "Certificat Orchestrating Data Pipelines in Microsoft Fabric.pdf",
    title: "Orchestrating Data Pipelines in Microsoft Fabric",
    issuer: "Microsoft",
    track: "Microsoft Fabric",
  },
]

export const certificationObjectKeys = certificationCatalog.map((item) => item.key)

const catalogByKey = new Map(certificationCatalog.map((item) => [item.key, item]))

export function assetFromKey(key: string, issuer?: string): CertificationAsset {
  const clean = key.replace(/^\/+/, "")
  const meta = catalogByKey.get(clean)
  return {
    key: clean,
    title: meta?.title || titleFromKey(clean),
    issuer: issuer || meta?.issuer,
    track:
      meta?.track ||
      (clean.toLowerCase().includes("fabric")
        ? "Microsoft Fabric"
        : clean.toLowerCase().includes("snowflake")
          ? "Snowflake"
          : /\b(spark|pyspark)\b/i.test(clean)
            ? "Apache Spark"
            : "IBM Data Engineering"),
    featured: meta?.featured,
    kind: kindFromKey(clean),
    src: publicObjectUrl(clean),
  }
}

export function catalogAssets(): CertificationAsset[] {
  return certificationCatalog.map((item) => assetFromKey(item.key))
}
