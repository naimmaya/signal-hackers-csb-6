export interface ReportItem {
  id: string;
  name: string;
  banglaTitle: string;
  badge?: string;
  badgeColor?: string;
  category: 'defamation' | 'security' | 'impersonation' | 'copyright' | 'legal' | 'appeal' | 'social' | 'helpline';
  formNumber?: string;
  formSubtitle: string;
  officialUrl: string;
  secondaryUrl?: string;
  isHelpline?: boolean;
  contacts?: {
    whatsapp: string;
    whatsappUrl: string;
    telegram: string;
    telegramUrl: string;
    facebookPageUrl: string;
  };
  iconColor: string; // e.g. amber, purple, emerald, blue, cyan, rose
  instructionBn: string;
  requiredFields: {
    key: string;
    labelBn: string;
    placeholder: string;
    defaultValue?: string;
  }[];
  scripts: {
    title: string;
    type: 'standard' | 'urgent' | 'detailed';
    template: string;
  }[];
  tipsBn: string[];
}

export const REPORT_ITEMS: ReportItem[] = [
  {
    id: 'signal-hackers-helpline',
    name: 'Help Line — Signal Hackers CSB',
    banglaTitle: 'জরুরি হেল্পলাইন ও সরাসরি যোগাযোগ (WhatsApp · Telegram · Facebook)',
    badge: 'Help Line',
    badgeColor: 'emerald',
    category: 'helpline',
    formSubtitle: 'Telegram: @Signalhackers · WhatsApp: 01679164271',
    officialUrl: 'https://wa.me/8801679164271',
    secondaryUrl: 'https://t.me/Signalhackers',
    isHelpline: true,
    contacts: {
      whatsapp: '01679164271',
      whatsappUrl: 'https://wa.me/8801679164271?text=Hello%20Signal%20Hackers%20CSB,%20%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0%20%E0%A6%AB%E0%A7%87%E0%A6%B8%E0%A6%AC%E0%A7%81%E0%A6%95%20%E0%A6%86%E0%A6%87%E0%A6%A1%E0%A6%BF/%E0%A6%AA%E0%A7%87%E0%A6%9C%20%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A7%9F%20%E0%A6%B8%E0%A6%B9%E0%A6%BE%E0%A7%9F%E0%A6%A4%E0%A6%BE%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%9C%E0%A6%A8%E0%A5%A4',
      telegram: '@Signalhackers',
      telegramUrl: 'https://t.me/Signalhackers',
      facebookPageUrl: 'https://www.facebook.com/signalhackerscsb6474?mibextid=ZbWKwL',
    },
    iconColor: 'emerald',
    instructionBn: 'ফেসবুক আইডি হ্যাকড, ব্ল্যাকমেইল, নকল প্রোফাইল বা আইডি ডিজেবল সমস্যার দ্রুত সমাধানের জন্য সরাসরি আমাদের সাথে হোয়াটসঅ্যাপ, টেলিগ্রাম বা অফিসিয়াল ফেসবুক পেজে যোগাযোগ করুন।',
    requiredFields: [
      { key: 'problemSummary', labelBn: 'আপনার সমস্যা সংক্ষেপে লিখুন', placeholder: 'যেমন: আইডি হ্যাক হয়েছে / ব্ল্যাকমেইল করছে' },
      { key: 'targetLink', labelBn: 'টার্গেট আইডি বা পোস্টের লিংক', placeholder: 'https://facebook.com/...' },
      { key: 'yourContact', labelBn: 'আপনার যোগাযোগের মোবাইল বা ইমেইল', placeholder: '01XXXXXXXXX' }
    ],
    scripts: [
      {
        title: 'হেল্পলাইন সাপোর্ট রিকোয়েস্ট মেসেজ (Help Line Message)',
        type: 'standard',
        template: `Hello Signal Hackers CSB Support Team,

I need urgent cyber assistance regarding my Facebook account issue.
Problem Description: {problemSummary}
Affected Account/Post URL: {targetLink}
My Contact Information: {yourContact}

Please review and advise me on the fastest recovery or report procedure.

Signal Hackers CSB Official Helpline:
• WhatsApp: 01679164271
• Telegram: @Signalhackers
• Facebook Page: https://www.facebook.com/signalhackerscsb6474?mibextid=ZbWKwL`
      }
    ],
    tipsBn: [
      'হোয়াটসঅ্যাপ নম্বর 01679164271 তে সরাসরি চ্যাট করে সমস্যার স্ক্রিনশট পাঠান।',
      'টেলিগ্রামে @Signalhackers আইডিতে মেসেজ দিয়ে গোপনীয়তার সাথে পরামর্শ নিতে পারেন।'
    ]
  },
  {
    id: 'deformation-facebook',
    name: 'Deformation Report Facebook',
    banglaTitle: 'মানহানি ও অবমাননাকর কনটেন্ট রিপোর্ট',
    badge: 'Featured',
    badgeColor: 'amber',
    category: 'defamation',
    formNumber: '430253071144967',
    formSubtitle: 'Contact Form 430253071144967',
    officialUrl: 'https://www.facebook.com/help/contact/430253071144967',
    iconColor: 'amber',
    instructionBn: 'ফেসবুকে কারও সম্মানহানি, মিথ্যা অপবাদ বা ব্যক্তিগত মর্যাদা ক্ষুণ্ণ করার উদ্দেশ্যে পোস্ট/ভিডিও দেওয়া হলে এই ফর্মটি ব্যবহার করুন।',
    requiredFields: [
      { key: 'targetUrl', labelBn: 'টার্গেট পোস্ট বা প্রোফাইল লিংক', placeholder: 'https://www.facebook.com/...' },
      { key: 'victimName', labelBn: 'ভিকটিম বা ক্ষতিগ্রস্ত ব্যক্তির নাম', placeholder: 'সম্পূর্ণ নাম' },
      { key: 'jurisdiction', labelBn: 'দেশ / এলাকা', placeholder: 'Bangladesh', defaultValue: 'Bangladesh' }
    ],
    scripts: [
      {
        title: 'স্ট্যান্ডার্ড ডিফামেশন স্ক্রিপ্ট (Standard)',
        type: 'standard',
        template: `Dear Meta Trust & Safety Team,

I am writing to report a serious violation of Meta Community Standards regarding Defamation and Harassment. The user at {targetUrl} has intentionally posted false, malicious, and defamatory allegations against {victimName} in {jurisdiction}. 

This content was published without any factual basis, solely to inflict severe reputational damage, psychological harassment, and public humiliation upon the victim. Under applicable defamation and cyber privacy protections, this deliberate character assassination constitutes illegal harassment.

Kindly investigate the reported URL immediately and take urgent action by permanently taking down the defamatory post and restricting the violating entity.

Reported URL: {targetUrl}
Victim Name: {victimName}
Jurisdiction: {jurisdiction}

Thank you for your prompt cooperation.
Respectfully submitted.`
      },
      {
        title: 'জরুরি রিমুভাল স্ক্রিপ্ট (Urgent Takedown)',
        type: 'urgent',
        template: `URGENT LEGAL & POLICY REMOVAL REQUEST

To Meta Legal & Grievance Department,
The referenced content at {targetUrl} contains severe libelous statements and malicious defamation targeted at {victimName}. This campaign of defamation causes ongoing irremediable harm, mental distress, and safety concerns. 

This violates Meta's policies on Bullying, Harassment, and Dignity. We urgently demand the expedited deletion of this material from your platform to mitigate severe civil damages.

Target Link: {targetUrl}
Target Subject: {victimName}

Action Requested: Immediate content removal and notification to the perpetrator.`
      }
    ],
    tipsBn: [
      'টার্গেট পোস্টটির স্পষ্ট স্ক্রিনশট এবং সরাসরি পারমালিংক সংগ্রহ করে রাখুন।',
      'অফিসিয়াল ফর্মে আপনার আসল নাম ও যোগাযোগের ইমেইল দিন।'
    ]
  },
  {
    id: 'legal-removed-request',
    name: 'Legal Removed Request',
    banglaTitle: 'আইনি অপসারণ অনুরোধ (FB + Instagram)',
    badge: 'FB + Insta',
    badgeColor: 'purple',
    category: 'legal',
    formNumber: '319149701968527 & 406206379945942',
    formSubtitle: 'Contact Form 319149701968527 & 406206379945942',
    officialUrl: 'https://www.facebook.com/help/contact/319149701968527',
    secondaryUrl: 'https://help.instagram.com/contact/406206379945942',
    iconColor: 'purple',
    instructionBn: 'ফেসবুক ও ইনস্টাগ্রামে দেশের প্রচলিত আইন ভঙ্গকারী বা ব্যক্তিগত অধিকার লঙ্ঘনকারী কনটেন্ট লিগ্যাল চ্যানেল দিয়ে রিমুভ করাতে এই ফর্ম ব্যবহৃত হয়।',
    requiredFields: [
      { key: 'targetUrl', labelBn: 'লঙ্ঘনকারী কনটেন্ট লিংক', placeholder: 'https://...' },
      { key: 'legalBasis', labelBn: 'আইনি কারণ / ধারা', placeholder: 'Violation of Cyber Security Act / Right to Privacy', defaultValue: 'Infringement of Privacy and Defamation Laws' },
      { key: 'applicantName', labelBn: 'আবেদনকারী / আইনজীবীর নাম', placeholder: 'সম্পূর্ণ নাম' }
    ],
    scripts: [
      {
        title: 'ফর্মাল লিগ্যাল নোটিশ স্ক্রিপ্ট',
        type: 'standard',
        template: `OFFICIAL NOTICE OF UNLAWFUL CONTENT & TAKEDOWN DEMAND

To: Meta Legal Operations (Facebook & Instagram)
Subject: Formal Request for Content Removal under Applicable Statutory Laws

I am submitting this formal legal request regarding unlawful material accessible via your platform:
Content URL: {targetUrl}
Applicable Legal Foundation: {legalBasis}
Affected Party / Counsel: {applicantName}

The specified content infringes upon statutory rights to privacy, personality, and civil protections. Continuation of hosting this unlawful media exposes both the uploader and distributor to civil liability.

We formally demand the immediate restriction and removal of access to this content globally or within the relevant jurisdiction.

Authorized Representative: {applicantName}
Verification Date: Current Date`
      }
    ],
    tipsBn: [
      'ইনস্টাগ্রাম ও ফেসবুক উভয়ের জন্যই পৃথক আইডি লিঙ্ক সাবমিট করা যায়।',
      'প্রযোজ্য ক্ষেত্রে সরকারি জিডি বা পুলিশ অভিযোগের রেফারেন্স সংযুক্ত করুন।'
    ]
  },
  {
    id: 'indian-grievance-officer',
    name: 'Indian Grievance Officer Report',
    banglaTitle: 'মেটা গ্রিভেন্স অফিসার রিপোর্ট (দক্ষিণ এশিয়া রুট)',
    badge: 'Meta India',
    badgeColor: 'emerald',
    category: 'legal',
    formNumber: '1371776380779082',
    formSubtitle: 'Meta Grievance Request 1371776380779082',
    officialUrl: 'https://www.facebook.com/help/contact/1371776380779082',
    iconColor: 'emerald',
    instructionBn: 'মেটা গ্রিভেন্স অফিসার সরাসরি দক্ষিণ এশিয়া ও ভারতের আইটি রুলস অনুযায়ী ২৪-৩৬ ঘণ্টার মধ্যে অ্যাকশন নিতে বাধ্য থাকে। এটি অত্যন্ত দ্রুত কাজ করে।',
    requiredFields: [
      { key: 'targetUrl', labelBn: 'অভিযুক্ত প্রোফাইল বা পোস্টের লিংক', placeholder: 'https://facebook.com/...' },
      { key: 'complaintType', labelBn: 'অভিযোগের ধরন', placeholder: 'Harassment / Impersonation / Violation of IT Rules', defaultValue: 'Harassment and Impersonation' }
    ],
    scripts: [
      {
        title: 'গ্রিভেন্স অফিসার আপিল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Grievance Officer, Meta Platforms Inc.
Subject: Formal Grievance Escalation under IT Intermediary Guidelines

Dear Grievance Officer,

I hereby raise a priority grievance concerning unlawful and harmful material hosted on your platform.
Violating URL: {targetUrl}
Grievance Category: {complaintType}

The reported link severely violates intermediary compliance standards and community dignity. Normal in-app reporting channels have failed to resolve this flagrant violation. Under statutory intermediary obligations, Meta is requested to acknowledge this grievance within 24 hours and disable access to the offending material expeditiously.

Attached is the specific violating URL for immediate review: {targetUrl}.

Respectfully submitted.`
      }
    ],
    tipsBn: [
      'গ্রিভেন্স ফর্মে ইমেইল দিলে মেটা স্বয়ংক্রিয়ভাবে একটি টিকিট রেফারেন্স নম্বর পাঠাবে।'
    ]
  },
  {
    id: 'telegram-18-report',
    name: 'Telegram 18+ Channel Report',
    banglaTitle: 'টেলিগ্রাম অবৈধ ১৮+ চ্যানেল রিমুভাল',
    badge: 'Telegram 18+',
    badgeColor: 'blue',
    category: 'social',
    formNumber: 'Abuse Portal & Mail Route',
    formSubtitle: 'Report Section: Illegal Adult Content (Other ...',
    officialUrl: 'https://telegram.org/support',
    secondaryUrl: 'mailto:abuse@telegram.org',
    iconColor: 'blue',
    instructionBn: 'টেলিগ্রামে ব্ল্যাকমেইল, ব্যক্তিগত ১৮+ ছবি-ভিডিও ছড়ানো চ্যানেল ও গ্রুপ বন্ধ করাতে সরাসরি অফিসিয়াল সাপোর্ট ও এবিউজ ইমেইলে পাঠান।',
    requiredFields: [
      { key: 'channelLink', labelBn: 'টেলিগ্রাম চ্যানেল / গ্রুপ লিংক', placeholder: 'https://t.me/example_channel' },
      { key: 'victimDetails', labelBn: 'ভিকটিম তথ্য (গোপনীয়)', placeholder: 'Non-consensual personal material of an innocent victim' }
    ],
    scripts: [
      {
        title: 'টেলিগ্রাম এবিউজ রিমুভাল ইমেইল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: abuse@telegram.org, stopca@telegram.org
Subject: URGENT: Illegal Non-Consensual Media / Violation Report - Immediate Channel Ban Required

Dear Telegram Abuse Team,

I am writing to report an urgent violation of Telegram's Terms of Service involving illegal distribution of non-consensual intimate media (NCII) and blackmail on your platform.

Offending Channel/Group Link: {channelLink}
Nature of Violation: {victimDetails}

The administrators of this channel are actively sharing private media without authorization, causing irreparable harm to individuals. 

Please immediately dismantle this channel, blacklist its creator, and revoke all associated invite links pursuant to Telegram's zero-tolerance policy against illegal non-consensual materials.

Channel: {channelLink}
Thank you for your decisive intervention.`
      }
    ],
    tipsBn: [
      'টেলিগ্রাম অ্যাপের ভেতরে গিয়ে রিপোর্ট করার পাশাপাশি abuse@telegram.org তে ইমেইল দিলে দ্রুত চ্যানেল সিজ হয়।'
    ]
  },
  {
    id: 'copyright-update',
    name: '🔰 Copyright Update 🔰',
    banglaTitle: 'কপিরাইট লঙ্ঘন ও কনটেন্ট রিমুভাল রিকোয়েস্ট',
    badge: 'Copyright',
    badgeColor: 'amber',
    category: 'copyright',
    formNumber: '1523801815366035',
    formSubtitle: 'Meta Request 1523801815366035',
    officialUrl: 'https://www.facebook.com/help/contact/1523801815366035',
    iconColor: 'amber',
    instructionBn: 'আপনার মূল কনটেন্ট (ছবি, ভিডিও, লেখা, গ্রাফিক্স) অনুমতি ছাড়া অন্য কেউ ফেসবুক পেজে বা আইডিতে ব্যবহার করলে এই ফর্ম দিয়ে রিমুভ করান।',
    requiredFields: [
      { key: 'originalWorkUrl', labelBn: 'আপনার আসল কাজের লিংক বা প্রমাণ', placeholder: 'https://mywebsite.com or original FB post' },
      { key: 'infringingUrl', labelBn: 'কপি করা পোস্ট/ভিডিওর লিংক', placeholder: 'https://facebook.com/infringing_post' },
      { key: 'ownerName', labelBn: 'কপিরাইট মালিকের নাম', placeholder: 'Creator / Organization Name' }
    ],
    scripts: [
      {
        title: 'কপিরাইট ইনফ্রিন্জমেন্ট স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Copyright & Intellectual Property Team
Subject: Notice of Copyright Infringement under DMCA

I am the verified copyright owner of the proprietary creative work referenced below. It has come to my attention that unauthorized reproduction and distribution of this work is taking place on Facebook without my license or consent.

Original Work URL / Proof: {originalWorkUrl}
Infringing Content URL: {infringingUrl}
Copyright Holder: {ownerName}

I have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent, or the law. The information in this notification is accurate, and under penalty of perjury, I confirm that I am the authorized copyright holder.

Please remove the infringing material immediately.
Authorized Signature: {ownerName}`
      }
    ],
    tipsBn: [
      'আসল পোস্টের পাবলিশ ডেট কপি করা পোস্টের চেয়ে পুরনো হতে হবে।'
    ]
  },
  {
    id: 'tiktok-privacy-violence',
    name: 'Tiktok Privacy Violence Report ✅',
    banglaTitle: 'টিকটক প্রাইভেসি ও ভায়োলেন্স রিপোর্ট',
    badge: 'TikTok',
    badgeColor: 'teal',
    category: 'social',
    formNumber: '/legal/report/privacy',
    formSubtitle: 'TikTok Webform: /legal/report/privacy',
    officialUrl: 'https://www.tiktok.com/legal/report/privacy',
    iconColor: 'teal',
    instructionBn: 'টিকটকে ব্যক্তিগত ছবি/ভিডিও বিনা অনুমতিতে আপলোড, ব্ল্যাকমেইল বা গোপন ক্যামেরার ফুটেজ রিমুভ করাতে টিকটকের লিগ্যাল ওয়েবফর্ম ব্যবহার করুন।',
    requiredFields: [
      { key: 'tiktokVideoUrl', labelBn: 'টিকটক ভিডিওর লিংক', placeholder: 'https://www.tiktok.com/@user/video/...' },
      { key: 'victimIdentity', labelBn: 'ব্যক্তির পরিচয়', placeholder: 'Self / Authorized Guardian' }
    ],
    scripts: [
      {
        title: 'টিকটক প্রাইভেসি রিমুভাল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: TikTok Legal & Trust Safety Department
Subject: Urgent Privacy Violation & Personal Likeness Removal Request

I am filing this privacy complaint pursuant to TikTok's Privacy Policy regarding unauthorized publication of personal likeness.

Offending TikTok Video URL: {tiktokVideoUrl}
Complainant Relationship: {victimIdentity}

The creator has captured and broadcast private identifiable media of the victim without informed consent. This material infringes upon individual privacy rights and facilitates targeted online harassment.

I request that TikTok immediately take down the video and sanction the offending account under your Harassment and Privacy Safety Guidelines.

Thank you.`
      }
    ],
    tipsBn: [
      'ভিডিও আইডি নম্বরটি ঠিকমতো দিন।'
    ]
  },
  {
    id: 'ai-assistant-18-remove',
    name: 'AI Assistant ১৮+ আইডি রিমুভ',
    banglaTitle: 'অ্যাডাল্ট ও ক্ষতিকর ১৮+ কন্টেন্ট মেটা এআই রুট',
    badge: 'AI Assist',
    badgeColor: 'rose',
    category: 'security',
    formNumber: '383679321740945',
    formSubtitle: 'Meta AI / In-App Direct Route',
    officialUrl: 'https://www.facebook.com/help/contact/383679321740945',
    iconColor: 'rose',
    instructionBn: 'ফেসবুক এআই ও ট্রাস্ট সেফটি অ্যালগরিদমের সহায়তায় ১৮+ অশ্লীল কনটেন্ট ও ছবি দ্রুত অটোমেশনের মাধ্যমে ডাউন করাতে এই রুট ব্যবহার করা হয়।',
    requiredFields: [
      { key: 'targetLink', labelBn: 'টার্গেট পোস্ট / গ্রুপ / প্রোফাইল লিংক', placeholder: 'https://www.facebook.com/...' },
      { key: 'violationNature', labelBn: 'কনটেন্টের প্রকৃতি', placeholder: 'Explicit adult media / Harassment', defaultValue: 'Exploitative adult material and harassment' }
    ],
    scripts: [
      {
        title: 'মেটা এআই সেফটি ট্রাস্ট স্ক্রিপ্ট',
        type: 'urgent',
        template: `PRIORITY EXPLOITATION & ADULT SAFETY ALERT

To: Meta Automated Safety Systems & Rapid Response Unit
Incident Type: {violationNature}
Target Reference: {targetLink}

The cited asset violates Meta's highest severity standards pertaining to sexual exploitation, non-consensual content, and safety hazards. Automated classifiers must flag this hash and suppress delivery across Meta apps immediately.

Expedited enforcement requested for: {targetLink}.`
      }
    ],
    tipsBn: [
      ' StopNCII হ্যাশ জেনারেটর ব্যবহার করলে ছবি মেটার সার্ভারে স্বয়ংক্রিয়ভাবে ব্লক হয়ে যায়।'
    ]
  },
  {
    id: 'impersonation-profile',
    name: 'Impersonation Profile Report',
    banglaTitle: 'নকল বা ফেক প্রোফাইল রিপোর্ট (অ্যাকাউন্ট থাকা অবস্থায়)',
    badge: 'Impersonation',
    badgeColor: 'cyan',
    category: 'impersonation',
    formNumber: '295309487309948',
    formSubtitle: 'Contact Form 295309487309948',
    officialUrl: 'https://www.facebook.com/help/contact/295309487309948',
    iconColor: 'cyan',
    instructionBn: 'আপনার নাম ও ছবি দিয়ে কেউ ফেক অ্যাকাউন্ট খুলে প্রতারণা বা ক্ষতি করলে এই ফর্মের মাধ্যমে মেটাকে অবহিত করুন।',
    requiredFields: [
      { key: 'impostorUrl', labelBn: 'ফেক / নকল প্রোফাইলের লিংক', placeholder: 'https://facebook.com/fake.profile' },
      { key: 'realProfileUrl', labelBn: 'আসল প্রোফাইলের লিংক', placeholder: 'https://facebook.com/real.profile' },
      { key: 'victimName', labelBn: 'ভিকটিমের নাম', placeholder: 'আপনার বা ব্যক্তির নাম' }
    ],
    scripts: [
      {
        title: 'ফেক আইডি রিমুভাল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Identity Security & Fraud Team
Subject: Report of Malicious Impersonation Profile (Identity Theft)

Dear Support Team,

I am writing to report a fraudulent Facebook profile that is pretending to be {victimName}.

Fraudulent Impersonator Link: {impostorUrl}
Genuine Profile Link: {realProfileUrl}
Targeted Person: {victimName}

The unauthorized account has cloned photos, personal details, and identity markers to deceive the public and damage personal reputation. This is a blatant violation of Meta's Community Standards on Inauthentic Identity and Impersonation.

I respectfully request Meta to verify the genuine profile and permanently terminate the impersonator account.

Submitted in good faith.`
      }
    ],
    tipsBn: [
      'আপনার আসল জাতীয় পরিচয়পত্র (NID) বা পাসপোর্টের স্পষ্ট ছবি সাবমিট করলে সর্বোচ্চ দ্রুত কাজ হয়।'
    ]
  },
  {
    id: 'impersonator-no-account',
    name: 'Impersonator (No Account Required)',
    banglaTitle: 'ফেক প্রোফাইল রিপোর্ট (যাদের ফেসবুক অ্যাকাউন্ট নেই)',
    category: 'impersonation',
    formNumber: '169486816475808',
    formSubtitle: 'Contact Form 169486816475808',
    officialUrl: 'https://www.facebook.com/help/contact/169486816475808',
    iconColor: 'blue',
    instructionBn: 'কোনো ব্যক্তি যদি ফেসবুকে অ্যাকাউন্ট না থাকা সত্ত্বেও তার ছবি বা নাম দিয়ে কেউ ফেক আইডি খুলে, তবে এই ফর্ম দিয়ে আইডি রিমুভ করা যায়।',
    requiredFields: [
      { key: 'fakeUrl', labelBn: 'ফেক আইডির লিংক', placeholder: 'https://facebook.com/impostor' },
      { key: 'fullName', labelBn: 'প্রকৃত ব্যক্তির পুরো নাম', placeholder: 'Full Name' },
      { key: 'contactEmail', labelBn: 'যোগাযোগের ইমেইল', placeholder: 'email@example.com' }
    ],
    scripts: [
      {
        title: 'নন-ইউজার ইমপার্সোনেশন স্ক্রিপ্ট',
        type: 'standard',
        template: `Dear Facebook Community Operations,

I do not maintain an active Facebook account, yet someone has created a fake profile impersonating my identity without authorization.

Impersonating Account Link: {fakeUrl}
Victim Legal Name: {fullName}
Contact Email: {contactEmail}

This fake profile is using my name and likeness, misrepresenting my personal identity to others. As a non-user whose privacy has been violated on your platform, I formally request that this impersonation profile be removed immediately.

Respectfully,
{fullName}`
      }
    ],
    tipsBn: [
      'এই ফর্মে ভিকটিমের সরকারি আইডি কার্ডের ছবি আপলোড করা আবশ্যক।'
    ]
  },
  {
    id: 'hacked-account-recovery',
    name: 'Hacked Account Recovery',
    banglaTitle: 'হ্যাকড ফেসবুক আইডি পুনরুদ্ধার পোর্টাল',
    badge: 'Security',
    badgeColor: 'rose',
    category: 'security',
    formSubtitle: 'Account Security / Recovery Portal',
    officialUrl: 'https://www.facebook.com/hacked',
    iconColor: 'rose',
    instructionBn: 'ফেসবুক আইডি যদি হ্যাকার দখলে নিয়ে ইমেইল বা পাসওয়ার্ড পরিবর্তন করে ফেলে, তবে এই অফিসিয়াল রিকভারি পোর্টাল দিয়ে সিকিউরিটি চেকআপ শুরু করুন।',
    requiredFields: [
      { key: 'oldEmailOrPhone', labelBn: 'আগের ইমেইল বা ফোন নম্বর', placeholder: '01XXXXXXXXX or email@domain.com' },
      { key: 'profileUrl', labelBn: 'হ্যাকড হওয়া প্রোফাইল লিংক', placeholder: 'https://facebook.com/myhackedid' }
    ],
    scripts: [
      {
        title: 'হ্যাকড অ্যাকাউন্ট সিকিউরিটি আপিল',
        type: 'urgent',
        template: `To: Meta Account Compromise & Recovery Unit
Subject: Emergency Account Takeover & Compromise Report

My Facebook account has been illicitly compromised and unauthorized credentials were added by an attacker.
Compromised Account: {profileUrl}
Original Owner Contact: {oldEmailOrPhone}

The unauthorized party changed the security information without authorization. I am the rightful owner and possess government-issued identification to substantiate proof of ownership.

Please trigger identity verification checkpoints for this account and secure it from malicious activity.`
      }
    ],
    tipsBn: [
      'যে মোবাইল বা কম্পিউটারে পূর্বে আইডিটি নিয়মিত লগইন থাকত, সেই ডিভাইস দিয়েই পোর্টালটি ওপেন করুন।'
    ]
  },
  {
    id: 'hijacked-page-group',
    name: 'Hijacked Page & Group Recovery',
    banglaTitle: 'হ্যাকড ফেসবুক পেজ ও গ্রুপ রিকভারি',
    category: 'security',
    formNumber: '128043970682387',
    formSubtitle: 'Contact Form 128043970682387',
    officialUrl: 'https://www.facebook.com/help/contact/128043970682387',
    iconColor: 'cyan',
    instructionBn: 'আপনার বিজনেস পেজ বা গ্রুপ থেকে অ্যাডমিন রিমুভ করে দেওয়া হলে বা হ্যাক হলে পেজের মালিকানা ফিরে পাওয়ার ফর্ম।',
    requiredFields: [
      { key: 'pageUrl', labelBn: 'হাইজ্যাক হওয়া পেজ বা গ্রুপের লিংক', placeholder: 'https://facebook.com/mypage' },
      { key: 'adminProfile', labelBn: 'আসল অ্যাডমিন প্রোফাইল লিংক', placeholder: 'https://facebook.com/originaladmin' },
      { key: 'dateOfLoss', labelBn: 'অ্যাক্সেস হারানোর তারিখ', placeholder: 'DD/MM/YYYY' }
    ],
    scripts: [
      {
        title: 'হাইজ্যাকড পেজ রিকভারি স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Business Support / Page Integrity Team
Subject: Hijacked Business Page Ownership Reclamation

I am filing an urgent claim regarding unauthorized administrator changes to our Facebook Page:
Hijacked Page URL: {pageUrl}
Original Sole Administrator: {adminProfile}
Date Incident Occurred: {dateOfLoss}

An unauthorized intrusion removed legitimate administrative credentials. As the authentic creator/business owner, I request an ownership audit and restoration of primary admin role. Business registration documents and historical payment receipts are available upon request.

Thank you.`
      }
    ],
    tipsBn: [
      'পেজের অ্যাড অ্যাকাউন্টে যদি কোনো কার্ড অ্যাড করা থাকে তার শেষ ৪ ডিজিট দিয়ে প্রমাণ দেওয়া সহজ হয়।'
    ]
  },
  {
    id: 'cyberbullying-defamation',
    name: 'Cyberbullying & Defamation Report',
    banglaTitle: 'সাইবার বুলিং ও হয়রানি রিপোর্ট',
    category: 'defamation',
    formNumber: '274459462613911',
    formSubtitle: 'Contact Form 274459462613911',
    officialUrl: 'https://www.facebook.com/help/contact/274459462613911',
    iconColor: 'purple',
    instructionBn: 'কাউকে লক্ষ্য করে অশ্রাব্য গালিগালাজ, ছবি বিকৃত করা, বা ব্যক্তিগত সম্মানহানি করা হলে এই ফর্ম কার্যকর।',
    requiredFields: [
      { key: 'harassmentUrl', labelBn: 'বুলিং বা হয়রানিমূলক পোস্টের লিংক', placeholder: 'https://facebook.com/post_id' },
      { key: 'victimName', labelBn: 'টার্গেট ব্যক্তির নাম', placeholder: 'Victim Name' }
    ],
    scripts: [
      {
        title: 'সাইবার বুলিং রিমুভাল আবেদন',
        type: 'standard',
        template: `Dear Meta Trust and Safety Community Team,

I am lodging a formal complaint regarding severe cyberbullying and harassment against {victimName}.
Violating Content: {harassmentUrl}

The content contains abusive attacks, humiliation, and coordinated bullying intended to threaten the psychological safety of the individual. This violates the Bullying & Harassment Community Guidelines.

I ask for immediate takedown of the content and strict sanctions against the poster.

Thank you.`
      }
    ],
    tipsBn: [
      'কমেন্টের লিংক বা কমেন্ট সেকশনের পারমালিংক দিলে মেটা সুনির্দিষ্টভাবে কমেন্টটি ডিলিট করে দেয়।'
    ]
  },
  {
    id: 'ncii-adult-content',
    name: 'NCII & Adult Content Report',
    banglaTitle: 'অন্তরঙ্গ ছবি/ভিডিও (NCII) অপসারণ ও ব্ল্যাকমেইল প্রতিরোধ',
    category: 'security',
    formNumber: '383679321740945 & StopNCII Portal',
    formSubtitle: 'Contact Form 383679321740945 & StopNCII Portal',
    officialUrl: 'https://www.facebook.com/help/contact/383679321740945',
    secondaryUrl: 'https://stopncii.org',
    iconColor: 'rose',
    instructionBn: 'ব্যক্তিগত বা গোপন ছবি/ভিডিও দিয়ে ব্ল্যাকমেইল বা অনুমতি ছাড়া ফেসবুকে পোস্ট করার ক্ষেত্রে সর্বোচ্চ অগ্রাধিকার ভিত্তিতে রিপোর্ট করুন।',
    requiredFields: [
      { key: 'threatUrl', labelBn: 'পোস্ট বা ব্ল্যাকমেইলারের আইডি লিংক', placeholder: 'https://facebook.com/...' },
      { key: 'caseDetails', labelBn: 'ঘটনার সংক্ষেপ (গোপন রাখা হবে)', placeholder: 'Non-consensual dissemination of private imagery' }
    ],
    scripts: [
      {
        title: 'জরুরি NCII রিমুভাল স্ক্রিপ্ট',
        type: 'urgent',
        template: `CRITICAL SAFETY ESCALATION: NON-CONSENSUAL INTIMATE IMAGERY (NCII)

To: Meta Special Investigations & Global Safety Response
Subject: Expedited Takedown Request for Non-Consensual Imagery

Offending URL: {threatUrl}
Incident Nature: {caseDetails}

This report concerns the non-consensual distribution or threat of distribution of intimate images. This poses immediate danger to life, well-being, and dignity.

Please execute hash-blocking on your automated safety filters immediately and remove the content across all Meta platforms without delay.`
      }
    ],
    tipsBn: [
      'StopNCII.org এ গিয়ে ছবি আপলোড ছাড়াই ডিজিটাল হ্যাশ তৈরি করে রাখলে ফেসবুক স্বয়ংক্রিয়ভাবে তা রুখে দেয়।'
    ]
  },
  {
    id: 'dmca-copyright',
    name: 'DMCA Copyright Report',
    banglaTitle: 'ডিএমসিএ কপিরাইট নোটিশ',
    category: 'copyright',
    formNumber: '1758255661104383',
    formSubtitle: 'Contact Form 1758255661104383',
    officialUrl: 'https://www.facebook.com/help/contact/1758255661104383',
    iconColor: 'amber',
    instructionBn: 'ডিজিটাল মিলেনিয়াম কপিরাইট অ্যাক্ট (DMCA) এর আওতায় আপনার তৈরি অডিও, ভিডিও বা গ্রাফিক্স চুরির বিরুদ্ধে লিগ্যাল নোটিশ দিন।',
    requiredFields: [
      { key: 'originalSource', labelBn: 'আপনার মূল কন্টেন্টের প্রমাণ লিংক', placeholder: 'https://youtube.com/watch?v=... or website' },
      { key: 'infringingUrl', labelBn: 'চুরি করা ফেসবুক পোস্ট/রিল লিংক', placeholder: 'https://facebook.com/reel/...' },
      { key: 'copyrightHolder', labelBn: 'কপিরাইট হোল্ডারের নাম', placeholder: 'Official Owner / Agency' }
    ],
    scripts: [
      {
        title: 'DMCA Takedown Notice',
        type: 'standard',
        template: `DMCA NOTICE OF INFRINGEMENT

To: Facebook DMCA Designated Agent
Complainant: {copyrightHolder}
Original URL: {originalSource}
Infringing URL: {infringingUrl}

I hereby submit this notification pursuant to 17 U.S.C. Section 512(c). The material located at {infringingUrl} infringes my copyrighted work located at {originalSource}.

I state under penalty of perjury that I am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. Please remove or disable access to the infringing material expeditiously.

Signature: {copyrightHolder}`
      }
    ],
    tipsBn: [
      'ফেসবুক রিলস বা ভিডিওতে অডিও কপিরাইট ক্লেম করার জন্য এই ফর্মটি সবচেয়ে দ্রুত কাজ করে।'
    ]
  },
  {
    id: 'trademark-protection',
    name: 'Trademark Protection',
    banglaTitle: 'ট্রেডমার্ক ও ব্র্যান্ড স্বত্ব সুরক্ষা রিপোর্ট',
    badge: 'Trademark',
    badgeColor: 'blue',
    category: 'legal',
    formNumber: '634636770043106',
    formSubtitle: 'Contact Form 634636770043106',
    officialUrl: 'https://www.facebook.com/help/contact/634636770043106',
    iconColor: 'blue',
    instructionBn: 'আপনার ব্র্যান্ডের নাম, লোগো বা ট্রেডমার্ক নকল করে ফেসবুক পেজ, গ্রুপ বা আইডি চালালে তা বন্ধ করতে এই ফর্ম ব্যবহার করুন।',
    requiredFields: [
      { key: 'trademarkName', labelBn: 'ট্রেডমার্ক বা ব্র্যান্ডের নাম', placeholder: 'যেমন: YourBrandName' },
      { key: 'registrationNumber', labelBn: 'রেজিস্ট্রেশন নম্বর বা দেশ', placeholder: 'Reg # 1234567 or Registered in Bangladesh', defaultValue: 'Registered Trademark' },
      { key: 'infringingPageUrl', labelBn: 'নকল পেজ বা প্রোফাইলের লিংক', placeholder: 'https://facebook.com/fake_brand_page' }
    ],
    scripts: [
      {
        title: 'ট্রেডমার্ক ইনফ্রিন্জমেন্ট স্ক্রিপ্ট (Trademark Infringement Notice)',
        type: 'standard',
        template: `NOTICE OF TRADEMARK INFRINGEMENT

To: Meta Platforms Intellectual Property Department
Trademark Name: {trademarkName}
Registration Info: {registrationNumber}
Infringing Facebook URL: {infringingPageUrl}

Dear Trademark Operations Team,
I am the authorized representative for the trademark "{trademarkName}". The referenced entity at {infringingPageUrl} is using our registered mark and brand identifiers without authorization in a manner likely to cause confusion, deception, and mistake among consumers.

Such conduct constitutes trademark infringement under international and local trademark statutes. We demand the immediate suspension of the infringing entity and cancellation of its unauthorized use of our mark.

Owner Representative: {trademarkName} Legal Dept.`
      },
      {
        title: 'জরুরি ব্র্যান্ড স্পুফিং স্ক্রিপ্ট (Brand Spoofing Notice)',
        type: 'urgent',
        template: `URGENT NOTICE OF CONSUMER CONFUSION & TRADEMARK FRAUD

To: Meta IP Operations,
The page at {infringingPageUrl} is unlawfully masquerading as the brand "{trademarkName}" ({registrationNumber}). Consumers are being actively misled by this fraudulent page into believing it is our official commercial channel.

Immediate takedown is required to protect consumers and mitigate ongoing brand dilution.

Link: {infringingPageUrl}`
      }
    ],
    tipsBn: [
      'ট্রেডমার্ক সার্টিফিকেটের কপি বা ট্রেড লাইসেন্সের ছবি ফর্মে আপলোড করলে রিপোর্ট ১০০% সফল হয়।'
    ]
  },
  {
    id: 'disabled-id-appeal',
    name: 'Disabled ID Appeal',
    banglaTitle: 'ডিজেবল ফেসবুক আইডি ফিরিয়ে আনার আপিল',
    badge: 'Appeal',
    badgeColor: 'slate',
    category: 'appeal',
    formNumber: '260749603972907',
    formSubtitle: 'Contact Form 260749603972907',
    officialUrl: 'https://www.facebook.com/help/contact/260749603972907',
    iconColor: 'slate',
    instructionBn: 'ফেসবুক যদি ভুলবশত আপনার আসল পার্সোনাল আইডি ডিসেবল বা নিষ্ক্রিয় করে দেয়, তবে মেটা রিভিউয়ারদের কাছে আপিল জানানোর ফর্ম।',
    requiredFields: [
      { key: 'accountName', labelBn: 'আইডির পুরো নাম', placeholder: 'Full Name on ID' },
      { key: 'loginEmailOrPhone', labelBn: 'লগইন ইমেইল বা ফোন', placeholder: 'user@example.com' }
    ],
    scripts: [
      {
        title: 'ডিজেবল অ্যাকাউন্ট রিকভারি আপিল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta User Operations / Account Appeals Reviewer
Subject: Appeal for Reinstatement of Mistakenly Disabled Facebook Account

Account Name: {accountName}
Login Identity: {loginEmailOrPhone}

Dear Support Team,
My personal Facebook account has been mistakenly disabled. I have always respected and strictly adhered to Meta's Community Standards and Terms of Service. I firmly believe that this suspension was triggered erroneously by automated filters or false reports.

My account represents my authentic identity and is essential for my daily communication and work. I am submitting my government-verified identification for review.

Please re-evaluate my account status and restore access at your earliest convenience.

Sincerely,
{accountName}`
      }
    ],
    tipsBn: [
      'আপনার ফেসবুক আইডির নামের সাথে এনআইডি বা জন্ম সনদের নামের মিল থাকা জরুরি।'
    ]
  },
  {
    id: 'ineligible-notice-appeal',
    name: 'Ineligible Notice Appeal',
    banglaTitle: 'ইনএলিজিবল (Not Eligible) নোটিশ আপিল',
    category: 'appeal',
    formNumber: '317389574998690',
    formSubtitle: 'Contact Form 317389574998690',
    officialUrl: 'https://www.facebook.com/help/contact/317389574998690',
    iconColor: 'slate',
    instructionBn: 'লগইন করার সময় যদি লেখা আসে "You are not eligible to use Facebook", তখন আইডি পুনরায় অ্যাক্টিভ করতে এই ফর্ম ব্যবহার করুন।',
    requiredFields: [
      { key: 'userFullName', labelBn: 'আপনার নাম', placeholder: 'Full Name' },
      { key: 'dateOfBirth', labelBn: 'জন্মতারিখ (NID অনুযায়ী)', placeholder: 'DD/MM/YYYY' },
      { key: 'registeredEmail', labelBn: 'রেজিস্টার্ড ইমেইল', placeholder: 'email@example.com' }
    ],
    scripts: [
      {
        title: 'ইনএলিজিবল নোটিশ আপিল স্ক্রিপ্ট',
        type: 'standard',
        template: `Dear Meta Appeals Board,

I am writing to appeal the "Ineligible" notice on my personal account ({registeredEmail}).
Legal Name: {userFullName}
Date of Birth: {dateOfBirth}

I meet all eligibility requirements to maintain an active Facebook profile, including age and authenticity standards. The sudden automated restriction appears to have occurred due to an error in identity verification.

Please review the attached valid government ID and reinstate my legitimate account.

Warm regards,
{userFullName}`
      }
    ],
    tipsBn: [
      'বয়স যদি ভুলবশত ১৮ এর নিচে সেট হয়ে থাকে তবে জন্মতারিখের প্রমাণপত্র যুক্ত করতে হবে।'
    ]
  },
  {
    id: 'scam-phishing-report',
    name: 'Scam & Phishing Report',
    banglaTitle: 'প্রতারণা ও ফিশিং ওয়েবসাইট রিপোর্ট',
    badge: 'Security',
    badgeColor: 'amber',
    category: 'security',
    formSubtitle: 'Security & Phishing Incident Form',
    officialUrl: 'https://www.facebook.com/help/contact/540977946302970',
    iconColor: 'amber',
    instructionBn: 'ফেসবুকে ভুয়ো গিফট, হ্যাকিং লিঙ্ক, ওটিপি ফাঁদ বা প্রতারণামূলক পেজ রিপোর্ট করার জন্য মেটা সিকিউরিটি ফর্ম।',
    requiredFields: [
      { key: 'scamUrl', labelBn: 'প্রতারণামূলক লিঙ্ক বা পেজ', placeholder: 'https://scam-link.com or FB page' },
      { key: 'scamType', labelBn: 'প্রতারণার ধরন', placeholder: 'Phishing login / Investment scam', defaultValue: 'Financial fraud & credentials harvesting' }
    ],
    scripts: [
      {
        title: 'ফিশিং লিঙ্ক ব্লক করার স্ক্রিপ্ট',
        type: 'urgent',
        template: `SECURITY THREAT ALERT: ACTIVE PHISHING & FINANCIAL FRAUD

To: Meta Threat Intelligence & Cybercrime Enforcement
Malicious Asset URL: {scamUrl}
Threat Type: {scamType}

The reported link is operating an active credential-harvesting phishing lure and fraudulent scam targeting Facebook users. This creates acute security liabilities and account compromise vectors.

We urgently request blacklisting of this domain across Meta's preview systems and suspension of the disseminating entities.`
      }
    ],
    tipsBn: [
      'ফিশিং সাইটের ডোমেইনটি মেটার চ্যাটে শেয়ার ব্লক করার জন্য মেটা সিকিউরিটি ডাটাবেজে যুক্ত করে।'
    ]
  },
  {
    id: 'underage-child-report',
    name: 'Underage Child Report',
    banglaTitle: '১৩ বছরের কম বয়সী অপ্রাপ্তবয়স্ক আইডি রিপোর্ট',
    category: 'social',
    formNumber: '209046679279097',
    formSubtitle: 'Contact Form 209046679279097',
    officialUrl: 'https://www.facebook.com/help/contact/209046679279097',
    iconColor: 'blue',
    instructionBn: '১৩ বছরের কম বয়সী কোনো শিশু বা বাচ্চার নামে অ্যাকাউন্ট খোলা থাকলে মেটার শিশু সুরক্ষা নীতিমালার অধীনে রিপোর্ট করুন।',
    requiredFields: [
      { key: 'childProfileUrl', labelBn: 'আইডি লিংক', placeholder: 'https://facebook.com/child_profile' },
      { key: 'childAge', labelBn: 'আনুমানিক বয়স', placeholder: 'e.g. 11 years old', defaultValue: 'Under 13 years old' }
    ],
    scripts: [
      {
        title: 'আন্ডারএজ চাইল্ড আইডি রিমুভাল স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Child Safety Operations
Subject: Report of Underage User (Under 13 Years of Age)

Profile Link: {childProfileUrl}
Estimated Age: {childAge}

The account referenced above belongs to a child who is under the minimum age of 13 required to hold a Facebook account according to COPPA regulations and Meta Terms of Service.

In the interest of child online safety, please restrict and delete this profile in compliance with your underage guidelines.

Thank you.`
      }
    ],
    tipsBn: [
      'অভিভাবক হিসেবেও এই ফর্মে আবেদন সাবমিট করা যায়।'
    ]
  },
  {
    id: 'deceased-person-memorial',
    name: 'Deceased Person Memorial',
    banglaTitle: 'মৃত ব্যক্তির আইডি মেমোরিয়ালাইজ বা ডিলিট রিকোয়েস্ট',
    category: 'legal',
    formNumber: '228813247197482',
    formSubtitle: 'Contact Form 228813247197482',
    officialUrl: 'https://www.facebook.com/help/contact/228813247197482',
    iconColor: 'slate',
    instructionBn: 'কোনো ফেসবুক ব্যবহারকারী মৃত্যুবরণ করলে তার স্মৃতি রক্ষার জন্য প্রোফাইলটি "Remembering" করতে বা অ্যাকাউন্ট মুছে ফেলতে আবেদন।',
    requiredFields: [
      { key: 'deceasedProfile', labelBn: 'মৃত ব্যক্তির প্রোফাইল লিংক', placeholder: 'https://facebook.com/deceased_user' },
      { key: 'fullName', labelBn: 'মৃত ব্যক্তির নাম', placeholder: 'Full Name' },
      { key: 'dateOfDeath', labelBn: 'মৃত্যুর তারিখ', placeholder: 'DD/MM/YYYY' }
    ],
    scripts: [
      {
        title: 'মেমোরিয়ালাইজেশন রিকোয়েস্ট স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Memorialization Operations
Subject: Request to Memorialize Deceased User's Account

Deceased User Profile: {deceasedProfile}
Full Name: {fullName}
Date of Passing: {dateOfDeath}

With deep sorrow, I notify Meta of the passing of the account holder above. As a family member / authorized representative, I request that this account be memorialized or permanently retired according to family wishes, preventing unauthorized modifications while preserving their memory.

Death certificate or obituary notice can be provided for verification.

Respectfully,`
      }
    ],
    tipsBn: [
      'মৃত্যু সনদপত্র বা অনলাইন শোক সংবাদ এর লিংক এটাচ করলে দ্রুত সম্পন্ন হয়।'
    ]
  },
  {
    id: 'identity-verification',
    name: 'Facebook Identity Verification',
    banglaTitle: 'ফেসবুক আইডেন্টিটি ভেরিফিকেশন (আইডি কার্ড সাবমিট)',
    category: 'security',
    formNumber: '183000765122339',
    formSubtitle: 'Contact Form 183000765122339',
    officialUrl: 'https://www.facebook.com/help/contact/183000765122339',
    iconColor: 'blue',
    instructionBn: 'নামে সমস্যা, বয়স নিয়ে কনফিউশন বা সিকিউরিটি লকের কারণে আইডি কার্ড কনফার্ম করতে এই অফিসিয়াল লিংকটি সরাসরি ব্যবহার করুন।',
    requiredFields: [
      { key: 'legalFullName', labelBn: 'আইডি কার্ড অনুযায়ী পুরো নাম', placeholder: 'NID অনুযায়ী নাম' },
      { key: 'accountEmail', labelBn: 'অ্যাকাউন্টের ইমেইল', placeholder: 'email@example.com' }
    ],
    scripts: [
      {
        title: 'আইডেন্টিটি কনফার্মেশন স্ক্রিপ্ট',
        type: 'standard',
        template: `To: Meta Identity Verification Service
Subject: Official Government ID Submission for Identity Confirmation

Account Legal Name: {legalFullName}
Account Registered Contact: {accountEmail}

Dear Meta Security Team,
I am submitting my official government-issued identity documents to confirm the authenticity of my Facebook account. The information in my attached documents matches my registered details precisely.

Kindly process my identity confirmation and restore full access to my profile.

Warm regards,
{legalFullName}`
      }
    ],
    tipsBn: [
      'আইডি কার্ডের চার কোণা যেন পরিষ্কার দেখা যায় এবং আলো যাতে অতিরিক্ত চকচক না করে সেভাবে ছবি তুলুন।'
    ]
  }
];
