import React from "react";
import Styles from "../components/Styles/Sidebar.module.css";

import ArchiveTick from "../assets/sidebar/archive-tick.svg";
import Crown from "../assets/sidebar/crown.svg";
import DocumentText from "../assets/sidebar/document-text.svg";
import Element3 from "../assets/sidebar/element-3.svg";
import FormkitHelp from "../assets/sidebar/formkit_help.svg";
import IconoirLanguage from "../assets/sidebar/iconoir_language.svg";
import NoteFavorite from "../assets/sidebar/note-favorite.svg";
import NoteRemove from "../assets/sidebar/note-remove.svg";
import NotificationBing from "../assets/sidebar/notification-bing.svg";
import Services3 from "../assets/sidebar/Services-3.svg";
import Setting2 from "../assets/sidebar/setting-2.svg";
import SolarCardSearch from "../assets/sidebar/solar_card-search-linear.svg";
import SolarMap from "../assets/sidebar/solar_map-linear.svg";
// You can replace icons with lucide-react or react-icons later

const MAIN_ITEMS = [
  { id: "overview", label: "نظرة عامة", icon: Element3, active: true },
  { id: "search", label: "خصائص البحث", icon: SolarCardSearch },
  { id: "map", label: "خريطة عقارساس", icon: SolarMap },
  { id: "indicators", label: "مؤشرات", icon: Services3 },
  { id: "notifications", label: "الإشعارات", icon: NotificationBing },
  { id: "gpt", label: "GPT عقارساس", icon: NoteFavorite },
  { id: "export", label: "تصدير البيانات", icon: NoteRemove },
  { id: "save", label: "حفظ العناصر", icon: ArchiveTick },
  { id: "news", label: "أخبار", icon: DocumentText },
  { id: "subscription", label: "اشتراك", icon: Crown },
];

const BOTTOM_ITEMS = [
  { id: "settings", label: "الإعدادات", icon: Setting2 },
  { id: "help", label: "مركز المساعدة", icon: FormkitHelp },
  { id: "lang", label: "اللغة", icon: IconoirLanguage },
];

function SidebarItem({ label, icon, active, onClick }) {
  return (
    <button
      type="button"
      className={`${Styles.item} ${active ? Styles.active : ""}`}
      onClick={onClick}
    >
      <span className={Styles.itemText}>{label}</span>
      <IconBox src={icon} />
    </button>
  );
}

function IconBox({ src }) {
  return <img src={src} alt="" className={Styles.icon} />;
}

export default function Sidebar({
  onSelect = () => {},
  user = { name: "أحمد", email: "Ahmed@gmail.com" },
}) {
  return (
    <aside className={Styles.sidebar} dir="rtl">
      {/* Top + middle area */}
      <div className={Styles.topArea}>
        <nav className={Styles.section}>
          {MAIN_ITEMS.map((it) => (
            <SidebarItem
              key={it.id}
              label={it.label}
              icon={it.icon}
              active={it.active}
              onClick={() => onSelect(it.id)}
            />
          ))}
        </nav>

        <div className={Styles.divider} />

        <nav className={Styles.section}>
          {BOTTOM_ITEMS.map((it) => (
            <SidebarItem
              key={it.id}
              label={it.label}
              icon={it.icon}
              onClick={() => onSelect(it.id)}
            />
          ))}
        </nav>
      </div>

      {/* Account area */}
      <div className={Styles.account}>
        <div className={Styles.accountText}>
          <div className={Styles.accountName}>{user.name}</div>
          <div className={Styles.accountEmail}>{user.email}</div>
        </div>

        <span className={Styles.accountChevron} aria-hidden="true">
          ⌄
        </span>
      </div>
    </aside>
  );
}
