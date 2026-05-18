# Privacy Policy for WorldWave Radio

**Effective Date:** 2026-05-18  
**Last Updated:** 2026-05-18

## Introduction

WorldWave Radio (package: `com.sam.krish.usa.worldwaveradio`) is an Android internet radio app that streams online audio content and station metadata. This policy explains what data is processed when you use the app, how that data is used, and your choices.

- App display name: WorldWave Radio
- Current app version: 1.2.8
- App link domain: `worldwaveradio.app`
- Core access model: guest listening supported; account login is not required for core streaming use

## Information We Process

### Information processed to run core app features

- Network and request data needed to fetch station metadata and stream audio over the internet.
- Device/app technical data required for playback compatibility and service operation (for example app version, OS-level runtime context, and service state).
- Foreground playback service state for persistent background listening.
- Notification-related state for playback, sleep-timer, and playback-issue alerts.

### Information stored locally on device

- Local app preferences via DataStore Preferences.
- Local database records via Room for app feature state.
- Optional local profile fields entered in-app (such as display name or email) for user experience features.

### Purchases and billing-related information

- Google Play Billing is integrated for premium/ad-free flow.
- Product IDs are managed in Google Play Console and may change over time.
- Purchase and entitlement status data may be processed to validate access, restore purchases, and prevent abuse.
- Payment card and payment instrument details are handled by Google Play, not directly by this app developer.

## Information We Do Not Request by Default App Permissions

The main manifest does not request runtime permissions for the following categories by default:

- Precise or approximate location
- Contacts
- Microphone/audio recording
- Bluetooth or nearby devices/casting runtime access
- External file/media runtime access

As implemented, those categories are not collected via default app runtime permission prompts.

## How We Use Information

We use processed information to:

- Deliver internet radio playback and station metadata.
- Operate background playback and user notifications.
- Save local preferences and local profile UX state.
- Serve advertising and rewarded support ad experiences.
- Support premium/ad-free billing flows, verification, and restore logic.
- Protect service integrity and prevent fraud/abuse.

## Advertising

Advertising is enabled in WorldWave Radio.

- Ad model: Google Mobile Ads (native ads and rewarded support ads).
- Dependency: `com.google.android.gms:play-services-ads:25.2.0`.
- Ad services may process identifiers and operational data under Google policies.
- You can manage ad personalization controls through your Android/Google settings where available.

## In-App Purchases and Subscriptions

In-app purchases/subscription support is enabled through Google Play Billing.

- Dependency: `com.android.billingclient:billing-ktx:8.3.0`.
- Product IDs are managed in Google Play Console and may change over time.
- Billing and transaction processing are handled by Google Play.
- This app may process purchase tokens/order status/entitlement state needed for verification and restore.

## SDKs, Libraries, and Platform Services Used

The app currently uses the following relevant dependencies/services:

- Google Play services ads: `com.google.android.gms:play-services-ads:25.2.0`
- Google Play Billing: `com.android.billingclient:billing-ktx:8.3.0`
- Google Play In-App Review: `com.google.android.play:review:2.0.2`
- Google Play Integrity API: `com.google.android.play:integrity:1.6.0`
- AndroidX Media3 (audio playback/session): `1.10.1`
- Retrofit: `3.0.0`
- OkHttp + Logging Interceptor: `5.3.2`
- Room Database: `2.8.4`
- DataStore Preferences: `1.2.1`
- Coil image loading: `2.7.0`
- Lottie animations: `6.7.1`

## Analytics and Crash Reporting

- No dedicated third-party analytics/crash SDK is integrated at this time (including Firebase Analytics, Crashlytics, Sentry, Bugsnag, Mixpanel, and Amplitude).
- Google Play services/ads/billing components may still process their own operational diagnostics under their own policies.

## Data Sharing and Third Parties

Data may be shared with or processed by third-party providers only as needed to run app features, ads, billing, and platform integrity/review flows, including Google Play services and related Google APIs. Third-party processing is governed by their own policies and terms.

## Data Retention

- Local app preferences/local database/profile UX fields remain on device until user clears app data or uninstalls.
- Purchase entitlement state (including ad-free flag state in app storage) remains until uninstall/clear data; entitlement can be restored from Google Play restore flow.
- Ads/billing/platform operational data retained by external providers follows provider policy and applicable law.
- Support email communications may be retained until request resolution and then archived for reasonable legal/business recordkeeping.

## Data Security

Reasonable technical and organizational measures are used to protect data handled by the app. No system can guarantee absolute security.

## Children’s Privacy

WorldWave Radio is a general-audience app and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child provided personal information, contact support to request review and deletion where applicable.

## International Data Transfers

Depending on provider infrastructure, information may be processed in countries other than your own. Applicable safeguards and provider controls apply under their terms and legal obligations.

## Your Rights and Choices

Depending on your location and applicable law, you may have rights to access, correct, delete, or object to certain processing, and to withdraw consent where consent is used. You may also control ad personalization through platform settings.

For privacy requests, contact: `samkrishusa007@gmail.com`.

## Changes to This Privacy Policy

This policy may be updated over time to reflect app changes, legal updates, or operational updates. Material updates will be reflected by changing the "Last Updated" date.

## Contact

- Support/Privacy contact email: `samkrishusa007@gmail.com`
- App domain: `worldwaveradio.app`

---

## Short In-App Privacy Summary (5-8 bullets)

- WorldWave Radio supports guest listening; no mandatory sign-in is required for core streaming.
- The app uses internet access for radio streaming and station metadata.
- Ads are enabled using Google Mobile Ads (native and rewarded support ads).
- Premium/ad-free billing flow is integrated through Google Play Billing.
- Payment card details are handled by Google Play, not directly by the developer.
- Local preferences/profile UX fields are stored on device and can be removed by clearing app data or uninstalling.
- No dedicated third-party analytics or crash SDK is integrated at this time.
- Notifications and foreground playback service are used for background audio and playback-related alerts.
