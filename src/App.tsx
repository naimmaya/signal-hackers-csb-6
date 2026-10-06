import React, { useState, useMemo } from 'react';
import {
  Folder,
  FolderOpen,
  Copy,
  Check,
  ExternalLink,
  Search,
  ShieldAlert,
  FileText,
  CheckCircle2,
  Sparkles,
  Share2,
  ChevronDown,
  LayoutGrid,
  FolderArchive,
  AlertCircle,
  BookOpen,
  Terminal,
  RefreshCw,
  X,
  Send,
  Zap,
  Lock,
  Phone,
  PhoneCall,
  MessageSquare,
  Headphones,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { REPORT_ITEMS, ReportItem } from './data/reportData';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [folderFilterQuery, setFolderFilterQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'folders' | 'cards'>('folders');
  const [selectedItemId, setSelectedItemId] = useState<string>('trademark-protection');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Field values for dynamic placeholders per item
  const [fieldValues, setFieldValues] = useState<Record<string, Record<string, string>>>({});
  const [selectedScriptType, setSelectedScriptType] = useState<Record<string, number>>({});

  // Show toast notification
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  // Copy to clipboard helper
  const handleCopy = (text: string, key: string, label: string = 'কপি হয়েছে!') => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerToast(label);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return REPORT_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.banglaTitle.toLowerCase().includes(q) ||
        item.formSubtitle.toLowerCase().includes(q) ||
        (item.formNumber && item.formNumber.toLowerCase().includes(q)) ||
        (item.badge && item.badge.toLowerCase().includes(q));

      const fq = folderFilterQuery.toLowerCase().trim();
      const matchFolderQuery =
        !fq ||
        item.name.toLowerCase().includes(fq) ||
        item.banglaTitle.toLowerCase().includes(fq) ||
        (item.formNumber && item.formNumber.toLowerCase().includes(fq));

      return matchCategory && matchSearch && matchFolderQuery;
    });
  }, [searchQuery, folderFilterQuery, selectedCategory]);

  const selectedItem = useMemo(() => {
    return (
      REPORT_ITEMS.find((item) => item.id === selectedItemId) ||
      REPORT_ITEMS[0]
    );
  }, [selectedItemId]);

  // Handle dynamic field changes
  const handleFieldChange = (itemId: string, key: string, val: string) => {
    setFieldValues((prev) => ({
      ...prev,
      [itemId]: {
        ...(prev[itemId] || {}),
        [key]: val,
      },
    }));
  };

  // Get generated script with filled placeholders
  const getFilledScript = (item: ReportItem, scriptIndex: number = 0) => {
    const scriptObj = item.scripts[scriptIndex] || item.scripts[0];
    if (!scriptObj) return '';
    let text = scriptObj.template;
    const currentValues = fieldValues[item.id] || {};

    item.requiredFields.forEach((field) => {
      const val = currentValues[field.key] || field.defaultValue || `[${field.labelBn}]`;
      text = text.replaceAll(`{${field.key}}`, val);
    });

    return text;
  };

  const getBadgeStyle = (badgeColor?: string) => {
    switch (badgeColor) {
      case 'amber':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'purple':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'emerald':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'blue':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'teal':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case 'rose':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
    }
  };

  const getFolderIconColor = (color: string) => {
    switch (color) {
      case 'amber':
        return 'text-amber-400 fill-amber-400/20';
      case 'purple':
        return 'text-purple-400 fill-purple-400/20';
      case 'emerald':
        return 'text-emerald-400 fill-emerald-400/20';
      case 'blue':
        return 'text-blue-400 fill-blue-400/20';
      case 'cyan':
        return 'text-cyan-400 fill-cyan-400/20';
      case 'teal':
        return 'text-teal-400 fill-teal-400/20';
      case 'rose':
        return 'text-rose-400 fill-rose-400/20';
      default:
        return 'text-slate-400 fill-slate-400/20';
    }
  };

  const activeScriptIdx = selectedScriptType[selectedItem.id] || 0;
  const currentRenderedScript = getFilledScript(selectedItem, activeScriptIdx);

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 flex flex-col font-['Hind_Siliguri',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#0c1a2f] border border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.35)] text-cyan-200 px-4 py-2.5 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner / Header Area */}
      <header className="pt-6 pb-4 px-4 sm:px-6 max-w-7xl mx-auto w-full text-center">
        {/* Breadcrumb kicker matching screenshot */}
        <div className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-emerald-400/90 mb-2.5 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-cyan-400">SIGNAL HACKERS CSB</span>
          <span>·</span>
          <span>FACEBOOK OFFICIAL REPORT ROUTES</span>
          <span>·</span>
          <span className="text-emerald-300">VERIFIED ADDITIONAL INFO</span>
        </div>

        {/* Big Title matching screenshot */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Signal Hackers CSB —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            ফেসবুক রিপোর্ট লিংক
          </span>{' '}
          ও অতিরিক্ত তথ্য
        </h1>

        {/* Subtitle matching screenshot */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed mb-5">
          নকল প্রোফাইল, হ্যাকড আইডি, হয়রানি, কপিরাইট ও আইডি ডিজবেল সমস্যার জন্য ফেসবুকের অফিসিয়াল লিংক এবং দ্রুত অ্যাকশন পেতে নিখুঁত ইংরেজি &quot;Additional Info&quot; স্ক্রিপ্ট এক ক্লিকে কপি করুন।
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-5 sm:gap-10 text-xs sm:text-sm text-slate-300 mb-6 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white text-base">22+</span>
            <span className="text-slate-400">অফিসিয়াল ফর্ম ও হেল্পলাইন</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-cyan-400 text-base">100%</span>
            <span className="text-slate-400">পলিসি মানসম্পন্ন স্ক্রিপ্ট</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-emerald-400 text-base">1-Click</span>
            <span className="text-slate-400">ইনস্ট্যান্ট কপি সুবিধা</span>
          </div>
        </div>

        {/* Main Search Bar matching screenshot */}
        <div className="relative max-w-2xl mx-auto mb-6">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="সমস্যার নাম, ফোল্ডার, ফর্ম নম্বর দিয়ে খুঁজুন (যেমন: Deformation, ৪৩০২৬৩০৭১১৪৪৯৬৭, হেল্পলাইন)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#0a1222] border border-[#1e2e49] hover:border-cyan-500/40 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 shadow-inner transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* View Mode Switch matching screenshot button styling */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            onClick={() => setViewMode('folders')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              viewMode === 'folders'
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'bg-[#0d1629] text-slate-400 hover:text-slate-200 border border-[#1b2b45]'
            }`}
          >
            <Folder className="w-4 h-4 fill-white/20" />
            <span>ফোল্ডার সিস্টেম (পছন্দনীয়)</span>
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              viewMode === 'cards'
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'bg-[#0d1629] text-slate-400 hover:text-slate-200 border border-[#1b2b45]'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>সকল কার্ড ভিউ</span>
          </button>
        </div>

        {/* Quick Category Filters */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap text-xs pt-1">
          {[
            { id: 'all', label: 'সকল সমস্যা (All)' },
            { id: 'helpline', label: '📞 হেল্পলাইন ও যোগাযোগ' },
            { id: 'defamation', label: 'মানহানি ও বুলিং' },
            { id: 'impersonation', label: 'ফেক আইডি' },
            { id: 'security', label: 'হ্যাকড ও সিকিউরিটি' },
            { id: 'copyright', label: 'কপিরাইট ও ট্রেডমার্ক' },
            { id: 'legal', label: 'আইনি ও গ্রিভেন্স' },
            { id: 'appeal', label: 'ডিজেবল আইডি আপিল' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (cat.id === 'helpline') {
                  setSelectedItemId('signal-hackers-helpline');
                }
              }}
              className={`px-3 py-1 rounded-md transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50'
                  : 'bg-[#091120] text-slate-400 hover:text-slate-200 border border-[#15233a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pb-24">
        {/* Folder Navigation Header matching screenshot */}
        <div className="flex items-center justify-between gap-3 mb-3 border-b border-[#14233c] pb-2.5">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-amber-400">📁</span>
            <span>রিপোর্ট ফোল্ডার নির্বাচন করুন (চাপ দিয়ে খুলুন):</span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              {filteredItems.length} টি প্রাপ্ত
            </span>
          </div>

          {/* Mini search input matching screenshot */}
          <div className="relative w-44 sm:w-56">
            <input
              type="text"
              value={folderFilterQuery}
              onChange={(e) => setFolderFilterQuery(e.target.value)}
              placeholder="ফোল্ডার খুঁজুন..."
              className="w-full pl-7 pr-3 py-1 bg-[#091120] border border-[#182a47] rounded-lg text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2 top-2" />
          </div>
        </div>

        {/* FOLDERS GRID VIEW (Matching screenshot 2-column or multi-column grid) */}
        {viewMode === 'folders' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
            {filteredItems.map((item) => {
              const isSelected = selectedItemId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedItemId(item.id);
                  }}
                  className={`relative cursor-pointer rounded-xl p-3 sm:p-3.5 transition-all text-left flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-[#0b1c38] border-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.28)] ring-1 ring-blue-500/60'
                      : 'bg-[#091223] border-[#16253e] hover:border-[#274066] hover:bg-[#0d1931]'
                  }`}
                >
                  {/* Folder Icon */}
                  <div className="pt-0.5 shrink-0">
                    <Folder
                      className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${getFolderIconColor(
                        item.iconColor
                      )}`}
                    />
                  </div>

                  {/* Folder Content */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-1.5 mb-1 flex-wrap">
                      <h3
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isSelected ? 'text-white' : 'text-slate-200'
                        }`}
                      >
                        {item.name}
                      </h3>

                      {item.badge && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-medium border ${getBadgeStyle(
                            item.badgeColor
                          )}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-400 font-mono truncate">
                      {item.formSubtitle}
                    </p>
                    <p className="text-[11px] text-slate-400/80 truncate mt-0.5">
                      {item.banglaTitle}
                    </p>
                  </div>

                  {/* Active Indicator Chevron */}
                  <div className="self-center">
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-blue-400 font-bold' : 'text-slate-600'
                      }`}
                    >
                      {isSelected ? '●' : '›'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ALL CARDS EXPANDED VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#091223] border border-[#16263e] rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Folder className={`w-5 h-5 ${getFolderIconColor(item.iconColor)}`} />
                      <h3 className="font-semibold text-sm text-white">{item.name}</h3>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border ${getBadgeStyle(
                          item.badgeColor
                        )}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-cyan-300 font-medium mb-1">{item.banglaTitle}</p>
                  <p className="text-[11px] text-slate-400 mb-3">{item.instructionBn}</p>

                  <div className="bg-[#050b16] p-2.5 rounded-lg border border-[#16233a] text-xs font-mono text-slate-300 flex items-center justify-between gap-2 mb-3">
                    <span className="truncate">{item.officialUrl}</span>
                    <button
                      onClick={() => handleCopy(item.officialUrl, `card-${item.id}`, 'লিংক কপি হয়েছে!')}
                      className="p-1 hover:bg-[#1a2d4b] rounded text-emerald-400 shrink-0"
                      title="কপি করুন"
                    >
                      {copiedKey === `card-${item.id}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#132036]">
                  <button
                    onClick={() => {
                      setSelectedItemId(item.id);
                      setViewMode('folders');
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="flex-1 py-1.5 px-3 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    স্ক্রিপ্ট ও বিবরণ দেখুন
                  </button>
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 bg-[#0f1d33] hover:bg-[#162b4c] text-cyan-300 rounded-lg text-xs font-medium border border-cyan-800/40 flex items-center gap-1"
                  >
                    <span>যান</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM ACTIVE FOLDER DRAWER / DETAIL PANEL (Matching screenshot bottom precisely) */}
        {selectedItem && (
          <section className="bg-[#081223] border border-[#1c3254] rounded-2xl p-4 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.6)] relative overflow-hidden transition-all">
            {/* Top Glowing Indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />

            {/* Header matching screenshot bottom view */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#142642]">
              <div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-cyan-400 flex items-center gap-2 mb-1">
                  <span>FOLDER VIEW</span>
                  <span>·</span>
                  <span>{selectedItem.formSubtitle.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">📁</span>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {selectedItem.name}
                  </h2>
                  {selectedItem.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-medium border ${getBadgeStyle(
                        selectedItem.badgeColor
                      )}`}
                    >
                      {selectedItem.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 mt-1">{selectedItem.banglaTitle}</p>
              </div>

              {/* Action bundle button matching screenshot */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const bundle = `[OFFICIAL FORM LINK]:\n${selectedItem.officialUrl}\n\n[ADDITIONAL INFO SCRIPT]:\n${currentRenderedScript}`;
                    handleCopy(bundle, 'all-bundle', 'ফর্ম লিংক এবং স্ক্রিপ্ট একসাথে কপি হয়েছে!');
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all whitespace-nowrap"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>সব একসাথে কপি / একশন</span>
                </button>
              </div>
            </div>

            {/* Official Link Block matching screenshot / Helpline Channel Block */}
            {selectedItem.isHelpline ? (
              <div className="mb-5 space-y-3">
                <label className="block text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>OFFICIAL HELPLINE CHANNELS (সরাসরি যোগাযোগের অফিসিয়াল চ্যানেলসমূহ):</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* WhatsApp */}
                  <div className="bg-[#050c18] border border-emerald-500/40 rounded-xl p-3 flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>হোয়াটসঅ্যাপ (WhatsApp)</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-800/40">24/7 ACTIVE</span>
                      </div>
                      <div className="text-sm font-mono text-emerald-300 font-bold mb-2">01679164271</div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <a
                        href="https://wa.me/8801679164271?text=Hello%20Signal%20Hackers%20CSB,%20%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%AB%E0%A7%87%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%95%20%E0%A6%86%E0%A6%87%E0%A6%A1%E0%A6%BF/%E0%A6%AA%E0%A7%87%E0%A6%9C%20%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A7%9F%20%E0%A6%B8%E0%A6%B9%E0%A6%BE%E0%A7%9F%E0%A6%A4%E0%A6%BE%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A5%A4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-sm"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>চ্যাট শুরু করুন</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          onClick={() => handleCopy('01679164271', 'hl-wa-copy', 'হোয়াটসঅ্যাপ নম্বর কপি হয়েছে!')}
                          className="py-1 px-1.5 bg-[#0e1b30] hover:bg-[#162a4a] text-slate-300 rounded text-[11px] font-medium border border-[#1b3154] flex items-center justify-center gap-1"
                        >
                          {copiedKey === 'hl-wa-copy' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>নম্বর কপি</span>
                        </button>
                        <a
                          href="tel:01679164271"
                          className="py-1 px-1.5 bg-[#0e1b30] hover:bg-[#162a4a] text-cyan-300 rounded text-[11px] font-medium border border-[#1b3154] flex items-center justify-center gap-1"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>কল করুন</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="bg-[#050c18] border border-cyan-500/40 rounded-xl p-3 flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Send className="w-3.5 h-3.5 text-cyan-400 -rotate-12" />
                          <span>টেলিগ্রাম (Telegram)</span>
                        </span>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950 px-1.5 py-0.2 rounded border border-cyan-800/40">FAST REPLY</span>
                      </div>
                      <div className="text-sm font-mono text-cyan-300 font-bold mb-2">@Signalhackers</div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <a
                        href="https://t.me/Signalhackers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Send className="w-3 h-3" />
                        <span>টেলিগ্রামে মেসেজ দিন</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                      <button
                        onClick={() => handleCopy('@Signalhackers', 'hl-tg-copy', 'টেলিগ্রাম ইউজারনেম কপি হয়েছে!')}
                        className="w-full py-1 px-1.5 bg-[#0e1b30] hover:bg-[#162a4a] text-slate-300 rounded text-[11px] font-medium border border-[#1b3154] flex items-center justify-center gap-1"
                      >
                        {copiedKey === 'hl-tg-copy' ? <Check className="w-3 h-3 text-cyan-400" /> : <Copy className="w-3 h-3" />}
                        <span>ইউজারনেম কপি</span>
                      </button>
                    </div>
                  </div>

                  {/* Facebook Page */}
                  <div className="bg-[#050c18] border border-blue-500/40 rounded-xl p-3 flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span className="text-blue-400 font-bold text-xs">f</span>
                          <span>ফেসবুক পেজ (Official)</span>
                        </span>
                        <span className="text-[10px] text-blue-400 bg-blue-950 px-1.5 py-0.2 rounded border border-blue-800/40">VERIFIED</span>
                      </div>
                      <div className="text-xs font-semibold text-blue-300 truncate mb-2">Signal Hackers CSB 6474</div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <a
                        href="https://www.facebook.com/signalhackerscsb6474?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-sm"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>পেজে ইনবক্স করুন</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                      <button
                        onClick={() => handleCopy('https://www.facebook.com/signalhackerscsb6474?mibextid=ZbWKwL', 'hl-fb-copy', 'ফেসবুক পেজ লিংক কপি হয়েছে!')}
                        className="w-full py-1 px-1.5 bg-[#0e1b30] hover:bg-[#162a4a] text-slate-300 rounded text-[11px] font-medium border border-[#1b3154] flex items-center justify-center gap-1"
                      >
                        {copiedKey === 'hl-fb-copy' ? <Check className="w-3 h-3 text-blue-400" /> : <Copy className="w-3 h-3" />}
                        <span>পেজ লিংক কপি</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-5">
                <label className="block text-xs font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
                  <span>🔗</span>
                  <span>FROM LINK (অফিসিয়াল ফর্ম লিংক):</span>
                </label>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <div className="flex-1 bg-[#050c18] border border-[#162742] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-cyan-300 font-mono break-all select-all shadow-inner">
                    {selectedItem.officialUrl}
                  </div>

                  {/* Emerald Copy Link Button matching screenshot */}
                  <button
                    onClick={() => handleCopy(selectedItem.officialUrl, 'form-link', 'অফিসিয়াল ফর্ম লিংক কপি হয়েছে!')}
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_12px_rgba(16,185,129,0.35)] shrink-0"
                  >
                    {copiedKey === 'form-link' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>ফর্ম লিংক কপি</span>
                  </button>

                  {/* Direct Visit Button matching screenshot */}
                  <a
                    href={selectedItem.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#14233c] hover:bg-[#1c3256] text-slate-100 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 border border-[#22395f] transition-all shrink-0"
                  >
                    <span>প্রবেশ করুন</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </a>
                </div>

                {selectedItem.secondaryUrl && (
                  <div className="mt-2 text-xs text-slate-400 flex items-center gap-2">
                    <span>বিকল্প/দ্বিতীয় রুট:</span>
                    <a
                      href={selectedItem.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>{selectedItem.secondaryUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Instruction / Overview in Bengali */}
            <div className="bg-[#0a162b] border border-[#172c4e] rounded-xl p-3.5 mb-5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>রিপোর্ট গাইডলাইন ও কারণ:</span>
              </div>
              <p className="leading-relaxed">{selectedItem.instructionBn}</p>
            </div>

            {/* Dynamic Placeholder Customization (Real-Time Script Generator) */}
            {selectedItem.requiredFields.length > 0 && (
              <div className="mb-5 bg-[#07101f] border border-[#152744] rounded-xl p-3.5 sm:p-4">
                <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300">
                    <Terminal className="w-4 h-4" />
                    <span>স্ক্রিপ্ট কাস্টমাইজেশন (আপনার তথ্য বসান - স্বয়ংক্রিয়ভাবে স্ক্রিপ্টে যুক্ত হবে):</span>
                  </div>
                  <span className="text-[11px] text-slate-400">ফিল্ড খালি রাখলেও ডিফল্ট স্ক্রিপ্ট কাজ করবে</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedItem.requiredFields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        {field.labelBn}
                      </label>
                      <input
                        type="text"
                        value={fieldValues[selectedItem.id]?.[field.key] || ''}
                        onChange={(e) =>
                          handleFieldChange(selectedItem.id, field.key, e.target.value)
                        }
                        placeholder={field.placeholder}
                        className="w-full bg-[#040812] border border-[#182d4f] rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info Script Box */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-cyan-300 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span>অতিরিক্ত তথ্য স্ক্রিপ্ট (Additional Info Script - ইংরেজিতে):</span>
                  </span>
                </div>

                {/* Script Type Selector (Standard / Urgent) */}
                {selectedItem.scripts.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    {selectedItem.scripts.map((script, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedScriptType((prev) => ({
                            ...prev,
                            [selectedItem.id]: idx,
                          }))
                        }
                        className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                          activeScriptIdx === idx
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/60'
                            : 'bg-[#0d1c33] text-slate-400 hover:text-slate-200 border border-[#1b2d4b]'
                        }`}
                      >
                        {script.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Script Textarea Display with Copy */}
              <div className="relative group">
                <pre className="bg-[#040913] border border-[#162947] rounded-xl p-4 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto selection:bg-cyan-500/30">
                  {currentRenderedScript}
                </pre>

                {/* Floating Quick Copy button */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() =>
                      handleCopy(currentRenderedScript, 'script-box', 'ইংরেজি Additional Info স্ক্রিপ্ট কপি হয়েছে!')
                    }
                    className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all"
                  >
                    {copiedKey === 'script-box' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>কপি সম্পন্ন!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>স্ক্রিপ্ট কপি করুন</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            {selectedItem.tipsBn.length > 0 && (
              <div className="flex items-start gap-2 text-xs text-slate-400 bg-[#071120] p-3 rounded-xl border border-[#132239]">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300">কার্যকরী পরামর্শ: </span>
                  {selectedItem.tipsBn.join(' ')}
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#132139] bg-[#050912] py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-slate-300">Signal Hackers CSB</span>
            <span>— সাইবার সিকিউরিটি ও ফেসবুক ট্রাস্ট সেফটি হেল্পডেস্ক</span>
          </div>
          <div className="text-slate-400 text-xs flex items-center gap-2 flex-wrap justify-center">
            <span className="text-emerald-400">হেল্পলাইন: 01679164271 (WhatsApp)</span>
            <span>·</span>
            <span className="text-cyan-400">টেলিগ্রাম: @Signalhackers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
