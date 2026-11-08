import React from 'react';

// Pure Monochrome (Black & White) Pixel-Art Pine Tree Cluster
// Matching Cloud, Mountain & SethLukin retro-tech pixel aesthetic
export function PixelPineCluster({
  className = "w-28 sm:w-36 h-auto",
  variant = "line" // "line" (white fill with black pixel outlines) or "silhouette" (bold black silhouette)
}: {
  className?: string;
  variant?: "line" | "silhouette";
}) {
  const isSilhouette = variant === "silhouette";
  const fillMain = isSilhouette ? "#111113" : "#FFFFFF";
  const fillShade = isSilhouette ? "#111113" : "#E4E4E7"; // subtle light gray pixel shading for line art
  const strokeLine = "#111113";

  return (
    <svg
      className={className}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* ======================================================== */}
      {/* 1. LEFT PINE TREE (Background Layer)                     */}
      {/* ======================================================== */}
      {/* Trunk */}
      <rect x="9" y="27" width="3" height="6" fill={isSilhouette ? "#111113" : "#FFFFFF"} />
      <rect x="8" y="27" width="1" height="6" fill={strokeLine} />
      <rect x="12" y="27" width="1" height="6" fill={strokeLine} />
      <rect x="9" y="33" width="3" height="1" fill={strokeLine} />

      {/* Foliage Tier 1 (Top) */}
      <rect x="9" y="10" width="3" height="3" fill={fillMain} />
      <rect x="8" y="12" width="5" height="2" fill={fillShade} />
      {/* Outline Tier 1 */}
      <rect x="9" y="9" width="3" height="1" fill={strokeLine} />
      <rect x="8" y="10" width="1" height="2" fill={strokeLine} />
      <rect x="12" y="10" width="1" height="2" fill={strokeLine} />
      <rect x="7" y="12" width="1" height="2" fill={strokeLine} />
      <rect x="13" y="12" width="1" height="2" fill={strokeLine} />
      <rect x="8" y="14" width="5" height="1" fill={strokeLine} />

      {/* Foliage Tier 2 (Middle) */}
      <rect x="7" y="15" width="7" height="4" fill={fillMain} />
      <rect x="6" y="18" width="9" height="3" fill={fillShade} />
      {/* Outline Tier 2 */}
      <rect x="6" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="14" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="5" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="15" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="6" y="21" width="9" height="1" fill={strokeLine} />

      {/* Foliage Tier 3 (Base) */}
      <rect x="5" y="22" width="11" height="3" fill={fillMain} />
      <rect x="4" y="24" width="13" height="3" fill={fillShade} />
      {/* Outline Tier 3 */}
      <rect x="4" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="16" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="3" y="24" width="1" height="3" fill={strokeLine} />
      <rect x="17" y="24" width="1" height="3" fill={strokeLine} />
      <rect x="4" y="27" width="13" height="1" fill={strokeLine} />

      {/* ======================================================== */}
      {/* 2. RIGHT PINE TREE (Background Layer)                    */}
      {/* ======================================================== */}
      {/* Trunk */}
      <rect x="36" y="27" width="3" height="6" fill={isSilhouette ? "#111113" : "#FFFFFF"} />
      <rect x="35" y="27" width="1" height="6" fill={strokeLine} />
      <rect x="39" y="27" width="1" height="6" fill={strokeLine} />
      <rect x="36" y="33" width="3" height="1" fill={strokeLine} />

      {/* Foliage Tier 1 (Top) */}
      <rect x="36" y="10" width="3" height="3" fill={fillMain} />
      <rect x="35" y="12" width="5" height="2" fill={fillShade} />
      {/* Outline Tier 1 */}
      <rect x="36" y="9" width="3" height="1" fill={strokeLine} />
      <rect x="35" y="10" width="1" height="2" fill={strokeLine} />
      <rect x="39" y="10" width="1" height="2" fill={strokeLine} />
      <rect x="34" y="12" width="1" height="2" fill={strokeLine} />
      <rect x="40" y="12" width="1" height="2" fill={strokeLine} />
      <rect x="35" y="14" width="5" height="1" fill={strokeLine} />

      {/* Foliage Tier 2 (Middle) */}
      <rect x="34" y="15" width="7" height="4" fill={fillMain} />
      <rect x="33" y="18" width="9" height="3" fill={fillShade} />
      {/* Outline Tier 2 */}
      <rect x="33" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="41" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="32" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="42" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="33" y="21" width="9" height="1" fill={strokeLine} />

      {/* Foliage Tier 3 (Base) */}
      <rect x="32" y="22" width="11" height="3" fill={fillMain} />
      <rect x="31" y="24" width="13" height="3" fill={fillShade} />
      {/* Outline Tier 3 */}
      <rect x="31" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="43" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="30" y="24" width="1" height="3" fill={strokeLine} />
      <rect x="44" y="24" width="1" height="3" fill={strokeLine} />
      <rect x="31" y="27" width="13" height="1" fill={strokeLine} />

      {/* ======================================================== */}
      {/* 3. CENTER HERO PINE TREE (Forefront, Tall & Prominent)  */}
      {/* ======================================================== */}
      {/* Trunk */}
      <rect x="22" y="29" width="4" height="6" fill={isSilhouette ? "#111113" : "#FFFFFF"} />
      <rect x="21" y="29" width="1" height="6" fill={strokeLine} />
      <rect x="26" y="29" width="1" height="6" fill={strokeLine} />
      <rect x="22" y="35" width="4" height="1" fill={strokeLine} />

      {/* Crown Tip Tier 1 */}
      <rect x="23" y="2" width="2" height="3" fill={fillMain} />
      <rect x="22" y="4" width="4" height="3" fill={fillMain} />
      {/* Outline Tier 1 */}
      <rect x="23" y="1" width="2" height="1" fill={strokeLine} />
      <rect x="22" y="2" width="1" height="2" fill={strokeLine} />
      <rect x="25" y="2" width="1" height="2" fill={strokeLine} />
      <rect x="21" y="4" width="1" height="3" fill={strokeLine} />
      <rect x="26" y="4" width="1" height="3" fill={strokeLine} />
      <rect x="22" y="7" width="4" height="1" fill={strokeLine} />

      {/* Tier 2 */}
      <rect x="21" y="8" width="6" height="3" fill={fillMain} />
      <rect x="20" y="11" width="8" height="3" fill={fillShade} />
      {/* Outline Tier 2 */}
      <rect x="20" y="8" width="1" height="3" fill={strokeLine} />
      <rect x="27" y="8" width="1" height="3" fill={strokeLine} />
      <rect x="19" y="11" width="1" height="3" fill={strokeLine} />
      <rect x="28" y="11" width="1" height="3" fill={strokeLine} />
      <rect x="20" y="14" width="8" height="1" fill={strokeLine} />

      {/* Tier 3 */}
      <rect x="19" y="15" width="10" height="4" fill={fillMain} />
      <rect x="18" y="18" width="12" height="3" fill={fillShade} />
      {/* Outline Tier 3 */}
      <rect x="18" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="29" y="15" width="1" height="3" fill={strokeLine} />
      <rect x="17" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="30" y="18" width="1" height="3" fill={strokeLine} />
      <rect x="18" y="21" width="12" height="1" fill={strokeLine} />

      {/* Tier 4 (Base Broad Layer) */}
      <rect x="17" y="22" width="14" height="4" fill={fillMain} />
      <rect x="16" y="25" width="16" height="4" fill={fillShade} />
      {/* Shadow Base Crevice */}
      {!isSilhouette && (
        <rect x="19" y="27" width="10" height="2" fill="#D4D4D8" />
      )}
      {/* Outline Tier 4 */}
      <rect x="16" y="22" width="1" height="3" fill={strokeLine} />
      <rect x="31" y="22" width="1" height="3" fill={strokeLine} />
      <rect x="15" y="25" width="1" height="4" fill={strokeLine} />
      <rect x="32" y="25" width="1" height="4" fill={strokeLine} />
      <rect x="16" y="29" width="16" height="1" fill={strokeLine} />

      {/* Center tree branch notch accents from reference */}
      {!isSilhouette && (
        <>
          <rect x="23" y="12" width="2" height="1" fill={strokeLine} />
          <rect x="21" y="18" width="2" height="1" fill={strokeLine} />
          <rect x="25" y="18" width="2" height="1" fill={strokeLine} />
          <rect x="20" y="24" width="3" height="1" fill={strokeLine} />
          <rect x="25" y="24" width="3" height="1" fill={strokeLine} />
        </>
      )}
    </svg>
  );
}

// Single Pixel Pine Tree (Compact individual unit for organic scattering)
export function SinglePixelPine({
  className = "w-10 sm:w-14 h-auto",
  variant = "line"
}: {
  className?: string;
  variant?: "line" | "silhouette";
}) {
  const isSilhouette = variant === "silhouette";
  const fillMain = isSilhouette ? "#111113" : "#FFFFFF";
  const fillShade = isSilhouette ? "#111113" : "#E4E4E7";
  const strokeLine = "#111113";

  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* Trunk */}
      <rect x="10" y="25" width="4" height="6" fill={isSilhouette ? "#111113" : "#FFFFFF"} />
      <rect x="9" y="25" width="1" height="6" fill={strokeLine} />
      <rect x="14" y="25" width="1" height="6" fill={strokeLine} />
      <rect x="10" y="31" width="4" height="1" fill={strokeLine} />

      {/* Tier 1 Tip */}
      <rect x="11" y="2" width="2" height="3" fill={fillMain} />
      <rect x="10" y="4" width="4" height="2" fill={fillShade} />
      <rect x="11" y="1" width="2" height="1" fill={strokeLine} />
      <rect x="10" y="2" width="1" height="2" fill={strokeLine} />
      <rect x="13" y="2" width="1" height="2" fill={strokeLine} />
      <rect x="9" y="4" width="1" height="2" fill={strokeLine} />
      <rect x="14" y="4" width="1" height="2" fill={strokeLine} />
      <rect x="10" y="6" width="4" height="1" fill={strokeLine} />

      {/* Tier 2 */}
      <rect x="8" y="7" width="8" height="4" fill={fillMain} />
      <rect x="7" y="10" width="10" height="3" fill={fillShade} />
      <rect x="8" y="7" width="1" height="3" fill={strokeLine} />
      <rect x="15" y="7" width="1" height="3" fill={strokeLine} />
      <rect x="6" y="10" width="1" height="3" fill={strokeLine} />
      <rect x="17" y="10" width="1" height="3" fill={strokeLine} />
      <rect x="7" y="13" width="10" height="1" fill={strokeLine} />

      {/* Tier 3 */}
      <rect x="6" y="14" width="12" height="5" fill={fillMain} />
      <rect x="5" y="18" width="14" height="4" fill={fillShade} />
      <rect x="5" y="14" width="1" height="4" fill={strokeLine} />
      <rect x="18" y="14" width="1" height="4" fill={strokeLine} />
      <rect x="4" y="18" width="1" height="4" fill={strokeLine} />
      <rect x="19" y="18" width="1" height="4" fill={strokeLine} />
      <rect x="5" y="22" width="14" height="1" fill={strokeLine} />

      {/* Tier 4 Base */}
      <rect x="4" y="22" width="16" height="3" fill={fillMain} />
      <rect x="3" y="24" width="18" height="2" fill={fillShade} />
      <rect x="3" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="20" y="22" width="1" height="2" fill={strokeLine} />
      <rect x="2" y="24" width="1" height="2" fill={strokeLine} />
      <rect x="21" y="24" width="1" height="2" fill={strokeLine} />
      <rect x="3" y="26" width="18" height="1" fill={strokeLine} />
    </svg>
  );
}

// Pixel Mountain directly matching Image 1
export function PixelMountainSVG({
  className = "w-72 h-auto"
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* Base Dark Mountain Mass (Black/Near black) */}
      <path
        d="
          M 0 30 H 64 V 28 H 62 V 26 H 60 V 25 H 58 V 24 H 56 V 23 H 54 V 22 H 52 V 20 H 50 V 19 H 48 V 18 H 46 V 17 H 44 V 16
          H 42 V 15 H 40 V 14 H 38 V 13 H 37 V 11 H 35 V 9 H 33 V 7 H 31 V 4 H 29 V 7 H 27 V 9 H 26 V 11 H 24 V 13 H 23 V 15
          H 21 V 17 H 19 V 19 H 17 V 21 H 15 V 23 H 13 V 24 H 11 V 25 H 9 V 26 H 7 V 27 H 5 V 28 H 3 V 29 H 0 Z
        "
        fill="#111113"
      />

      {/* Right-Side Shaded Snow Glaciers (Mid Gray) */}
      <rect x="31" y="8" width="2" height="14" fill="#A1A1AA" />
      <rect x="33" y="14" width="2" height="8" fill="#A1A1AA" />
      <rect x="39" y="16" width="2" height="6" fill="#A1A1AA" />
      <rect x="43" y="19" width="2" height="5" fill="#A1A1AA" />

      {/* Pure White Snow Face Highlights (From Image 1) */}
      <rect x="30" y="4" width="2" height="3" fill="#FFFFFF" />
      <rect x="31" y="6" width="3" height="4" fill="#FFFFFF" />
      <rect x="32" y="9" width="4" height="6" fill="#FFFFFF" />
      <rect x="34" y="12" width="4" height="8" fill="#FFFFFF" />
      <rect x="36" y="15" width="5" height="7" fill="#FFFFFF" />
      <rect x="41" y="18" width="5" height="6" fill="#FFFFFF" />
      <rect x="46" y="21" width="4" height="4" fill="#FFFFFF" />
      <rect x="50" y="24" width="3" height="3" fill="#FFFFFF" />

      {/* Left/Center Isolated Snow Patches */}
      <rect x="18" y="20" width="3" height="2" fill="#FFFFFF" />
      <rect x="23" y="16" width="2" height="3" fill="#FFFFFF" />
      <rect x="25" y="23" width="2" height="4" fill="#FFFFFF" />
      <rect x="13" y="25" width="2" height="2" fill="#FFFFFF" />
    </svg>
  );
}
