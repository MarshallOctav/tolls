import { Tool, ToolStatus } from '@/types/tool';

// Helper to generate unique IDs
const generateId = (category: string, no: number) => 
  `${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${no}`;

// Helper to get random status for demo
const getRandomStatus = (): ToolStatus => {
  const statuses: ToolStatus[] = [
    'pending', 'in_progress', 'deployed', 'revision_after_deploy',
    'trial', 'revision_after_trial', 'launched', 'revision_after_launch'
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const initialToolsData: Tool[] = [
  // BELLCORP HIERARCHY
  { id: generateId('bellcorp', 1), no: 1, name: 'BELLTOWER VISION', brandApp: '', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 2), no: 2, name: 'WEB ABELL', brandApp: 'ABELLJABBAR.ID', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 3), no: 3, name: 'CONTENT PLANER PERSONAL BRANDING', brandApp: 'CONPERO', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 4), no: 4, name: 'CAMPUSS GLOBAL LEARNING', brandApp: 'EDUGRAF', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 5), no: 5, name: 'PADEL HUB PLATFORM', brandApp: 'PADELHUB', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 6), no: 6, name: 'WEALTH TOOLS', brandApp: 'WEALTHIS', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 7), no: 7, name: 'MEDIA PEMBELAJARAN KULIAH', brandApp: 'STUDASH', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 8), no: 8, name: 'MULTI ENTITY CORPORATE SYSTEM', brandApp: 'IBOS', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 9), no: 9, name: 'PORTAL TOUR LEADER ITLA', brandApp: 'ITLA.WEB.ID', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 10), no: 10, name: 'PORTAL AGCI', brandApp: 'AGCI', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 11), no: 11, name: 'IP CATALOG', brandApp: 'IP CATALOG', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('bellcorp', 12), no: 12, name: 'PATTERN LIFE BIG MAGIC PITCHING', brandApp: 'PATTERNAL', category: 'BELLCORP HIERARCHY', status: getRandomStatus(), note: '', pic: '' },
  
  // SAAS & MICRO SAAS
  { id: generateId('saas', 1), no: 1, name: 'DASHBOARD CONSOLE OWNER', brandApp: 'COWNBOR', category: 'SAAS & MICRO SAAS', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('saas', 2), no: 2, name: 'DASHBOARD USER', brandApp: 'DASSER', category: 'SAAS & MICRO SAAS', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('saas', 3), no: 3, name: 'DASHBOARD LFCL', brandApp: 'LICENSO', category: 'SAAS & MICRO SAAS', status: getRandomStatus(), note: '', pic: '' },
  
  // HOLDING / GENERAL
  { id: generateId('holding', 1), no: 1, name: 'TASK MANAGER ALL (MASTERPLAN)', brandApp: 'MASTERP', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 2), no: 2, name: 'POS ALL DIVISI', brandApp: 'POSDIV', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 3), no: 3, name: 'TASK MANAGER', brandApp: 'TASKMEN', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 4), no: 4, name: 'PASSWORD VAULT', brandApp: 'PASSVAL', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 5), no: 5, name: 'TAX CALCULATOR INDO', brandApp: 'TAXINDO', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 6), no: 6, name: 'CONTENT PLANER', brandApp: 'CONNER', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 7), no: 7, name: 'MONITORING TEAM', brandApp: 'MONTIM', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 8), no: 8, name: 'SIMPLY KANBAN', brandApp: 'KABANA', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 9), no: 9, name: 'NOTES AND BOARD', brandApp: 'COBOX', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 10), no: 10, name: 'FINANCE RECAP TRACKER', brandApp: 'REFINTRA', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 11), no: 11, name: 'PROFORMA INVOICE', brandApp: 'INVRO', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 12), no: 12, name: 'HR MANAGEMEN SISTEM', brandApp: 'HRMIS', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 13), no: 13, name: 'FINANCE MANAGEMEN SISTEM GLOBAL', brandApp: 'FINSYS', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 14), no: 14, name: 'FMS UKM TO ENTREPRISE', brandApp: 'FINAGROW', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 15), no: 15, name: 'FINANCE ALLOCATOR SISTEM', brandApp: 'FINALOC', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 16), no: 16, name: 'BISNIS MODEL CANVAS ROADMAP 4DX', brandApp: 'BIZCAN', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 17), no: 17, name: 'MINDMAP VISUAL', brandApp: 'MIVIS', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('holding', 18), no: 18, name: 'PORTAL BERITA DAN MEDIA', brandApp: 'INFOBOS.ONLINE', category: 'HOLDING / GENERAL', status: getRandomStatus(), note: '', pic: '' },
  
  // TOUR TRAVEL
  { id: generateId('tour', 1), no: 1, name: 'ITINERARY GENERATOR', brandApp: 'ITIGO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 2), no: 2, name: 'QUOTATION CALCULATOR', brandApp: 'QUOTURO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 3), no: 3, name: 'CRM TRAVEL HUB', brandApp: 'CRAMELO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 4), no: 4, name: 'HELPER GUIDE TEMPLATE', brandApp: 'GUIDEM', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 5), no: 5, name: 'ROOMLIST GENERATOR', brandApp: 'ROMITOR', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 6), no: 6, name: 'MANIFEST GENERATOR', brandApp: 'MANIFESTOR', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 7), no: 7, name: 'OPENTRIP DASHBOARD', brandApp: 'OPENTRIPER', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 8), no: 8, name: 'TRAVEL JOURNEY PLANNER', brandApp: 'JOURNIGO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 9), no: 9, name: 'RESERVASI FORM TO CS', brandApp: 'RESERFOM', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 10), no: 10, name: 'ACTION CHECKLIST FOR TL & GUIDE', brandApp: 'TURLID', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 11), no: 11, name: 'RPD PERJALANAN DINAS', brandApp: 'PERJADIS', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 12), no: 12, name: 'TOTAL TRAVEL SISTEM ERP', brandApp: 'MASTRIPO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 13), no: 13, name: 'DASHBOARD OPENTRIP', brandApp: 'OPENTRIPER', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 14), no: 14, name: 'UMROH MASTER OPERATION', brandApp: 'UMPRO', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('tour', 15), no: 15, name: 'HT PTT JAMAAH WALKIE TALKIE', brandApp: 'PITALK', category: 'TOUR TRAVEL', status: getRandomStatus(), note: '', pic: '' },
  
  // OPTIBIS ID & IO
  { id: generateId('optibis', 1), no: 1, name: 'DIGITAL MONEY EARNING PLATFORM', brandApp: 'REVENUIX.ID', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 2), no: 2, name: 'PAGE TOKO WEB BUILDER', brandApp: 'INITOKO.ONLINE', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 3), no: 3, name: 'WEB BUILDER PERSONAL BRANDING', brandApp: 'PROFILO', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 4), no: 4, name: 'POS RECAP PENJUALAN', brandApp: 'RE-CAP', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 5), no: 5, name: 'SALES MULTIBRAND', brandApp: 'SALES-HUB', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 6), no: 6, name: 'CONTACT COLLECTOR', brandApp: 'CONTOR', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 7), no: 7, name: 'STARTERPACK BISNIS DIGITAL', brandApp: 'OPTIMA', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 8), no: 8, name: 'ADMIN DIGITAL', brandApp: 'OPTIMA', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 9), no: 9, name: 'ALL IN ONE MEETING TOOLS', brandApp: 'NOTULENSIPRO', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 10), no: 10, name: 'LANDING PAGE GENERATOR', brandApp: 'LANDING.GEN', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 11), no: 11, name: 'CATALOG GENERATOR', brandApp: 'GENTALOG', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 12), no: 12, name: 'FEATURE GENERATOR', brandApp: 'AI DEA', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 13), no: 13, name: 'WEBCLONE MANAGER', brandApp: 'CLOW', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 14), no: 14, name: 'PROJECT TOOLS MANAGEMENT', brandApp: 'OPPEROS', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 15), no: 15, name: 'SISTEM MANAJEMEN PEDAGANG KECIL', brandApp: 'DAGANGANKU', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 16), no: 16, name: 'KUMPULAN TOOLS AI BY PURPOSE', brandApp: 'AI-ATLAS', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 17), no: 17, name: 'COMPRO GENERATOR WEB', brandApp: 'COMPRO.SITE', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 18), no: 18, name: 'ALL IN ONE SEO ULTIMATE', brandApp: 'SEOX', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 19), no: 19, name: 'SLIDE GENERATOR', brandApp: 'SLITOR', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 20), no: 20, name: 'MINI ERP GLOBAL', brandApp: 'SISMEN', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 21), no: 21, name: 'FORECASTING COMPARE', brandApp: 'FORECTIVE', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 22), no: 22, name: 'FEASIBILITY STUDY', brandApp: 'FESTUD', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 23), no: 23, name: 'BLOG POST AUTO MASIVE', brandApp: 'MASBLO', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 24), no: 24, name: 'POSTING DSE', brandApp: 'DESEU', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 25), no: 25, name: 'DAILY MARCOM ACTIVITY', brandApp: 'OMNIHUB', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 26), no: 26, name: 'EBOOK GENERATOR', brandApp: 'EBOGEN', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('optibis', 27), no: 27, name: 'Professional MICE Ecosystem', brandApp: 'PROMICE', category: 'OPTIBIS ID & IO', status: getRandomStatus(), note: '', pic: '' },
  
  // MUSLIMAPPS.WEB
  { id: generateId('muslim', 1), no: 1, name: 'UMROH GUIDE COMPLETE AI', brandApp: 'DIGI UMROH', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 2), no: 2, name: 'MUSLIM ASSESSMENT', brandApp: 'MUSLIMENT', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 3), no: 3, name: 'PARENTING ISLAM', brandApp: 'PARENTIS', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 4), no: 4, name: 'HUKUM WARIS CALCULATOR', brandApp: 'KALFARO', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 5), no: 5, name: 'ZAKAT INFAQ CALCULATOR', brandApp: 'ZISCAL', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 6), no: 6, name: 'ENSIKLOPEDI PERADABAN ISLAM', brandApp: 'EPEDIS', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 7), no: 7, name: 'MANAJEMEN SYARIAH', brandApp: 'MASRY', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 8), no: 8, name: 'KULIAH ISLAM DAN SYARIAH', brandApp: 'ULUM CAMPUS', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 9), no: 9, name: 'ENSIKLOPEDI HADIST', brandApp: 'EDDIST', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 10), no: 10, name: 'HALAL AUDITOR', brandApp: 'HALATOR', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 11), no: 11, name: 'DAILY MUSLIM HABITS', brandApp: 'MUSLIMPLUS', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('muslim', 12), no: 12, name: 'TOOLS GENERIK LAIN', brandApp: '', category: 'MUSLIMAPPS.WEB', status: getRandomStatus(), note: '', pic: '' },
  
  // MASTER B
  { id: generateId('masterb', 1), no: 1, name: 'RECRUITMENT & SELECTION', brandApp: 'SELECTO', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 2), no: 2, name: 'PSYCHE TALENT TEST ASSESSMENT', brandApp: 'TESTAMENTO', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 3), no: 3, name: 'PROFILING HR DATABASE', brandApp: 'HAERDA', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 4), no: 4, name: 'SMART LEARNING TRACKER', brandApp: 'LEARNIT', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 5), no: 5, name: 'TOTAL ASSET BUILDER', brandApp: 'ASSETOR', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 6), no: 6, name: 'ATHERIUM TOTAL LIFE', brandApp: 'ATHERLIFE', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 7), no: 7, name: 'DASHBOARD KEHIDUPAN', brandApp: 'DASHLIV', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 8), no: 8, name: 'MASTERB MASTERVIEW', brandApp: 'MASTERB', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 9), no: 9, name: 'HR PLATFORM ECOSISTEM', brandApp: 'HR CONNECT', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 10), no: 10, name: 'JOB EMPLOYEE SEARCHING PLATFORM', brandApp: 'JOB CONNECT', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 11), no: 11, name: 'INTERNSHIP OPERATION', brandApp: 'INTERNIC', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 12), no: 12, name: 'CREATE LIFE BIG MAGIC PATTERN ANALYZER', brandApp: 'PATTERNAL', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 13), no: 13, name: 'EXTREME PRODUCTIVITY', brandApp: '', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
  { id: generateId('masterb', 14), no: 14, name: 'RECRUITMENT COPILOT', brandApp: '', category: 'MASTER B', status: getRandomStatus(), note: '', pic: '' },
];