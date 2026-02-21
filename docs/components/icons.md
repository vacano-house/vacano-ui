# Icons

1,894 Lucide icons available as individual React components. All icons can be visually browsed at [lucide.dev/icons](https://lucide.dev/icons).

## Import

```tsx
import { Check, X, Plus, Search, User } from '@vacano/ui/icons'
```

Import only the icons you need for optimal tree-shaking.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `'currentColor'` | Stroke color (inherited from CSS `color` by default) |
| `strokeWidth` | `number` | `2` | SVG stroke width |
| `className` | `string` | - | CSS class name |
| All SVG attributes | `HTMLAttributes<SVGElement>` | - | Any valid SVG HTML attribute |

## Usage

### Basic

```tsx
import { Check, X, Star } from '@vacano/ui/icons'

<Check />
<X />
<Star />
```

### Sizing

```tsx
import { Heart } from '@vacano/ui/icons'

<Heart size={16} />
<Heart size={24} />
<Heart size={32} />
<Heart size={48} />
```

### Coloring

```tsx
import { AlertTriangle, CheckCircle, XCircle } from '@vacano/ui/icons'

<AlertTriangle color="#f59e0b" />
<CheckCircle color="#22c55e" />
<XCircle color="#ef4444" />
```

### With Buttons

```tsx
import { Button } from '@vacano/ui'
import { Plus, Download, Trash2 } from '@vacano/ui/icons'

<Button icon={<Plus size={16} />}>Add Item</Button>
<Button icon={<Download size={16} />}>Download</Button>
<Button variant="danger" icon={<Trash2 size={16} />}>Delete</Button>
```

### Inline with Text

```tsx
import { Star, MapPin } from '@vacano/ui/icons'

<span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
  <Star size={16} /> Featured
</span>

<span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
  <MapPin size={16} /> New York, NY
</span>
```

---

## Icon Reference

All 1,894 icons organized by category. Each icon is imported by its exact component name from `@vacano/ui/icons`.

---

### Actions

Common user actions: confirm, cancel, edit, delete, copy, save, search, etc.

| Icon | Description |
|------|-------------|
| `Check` | Confirm, approve, done, tick |
| `CheckCheck` | Double check, verified, read receipt |
| `CheckLine` | Check with line, confirm |
| `X` | Close, cancel, remove, dismiss |
| `Plus` | Add, create, new, insert |
| `Minus` | Remove, subtract, reduce |
| `Copy` | Copy, duplicate, clipboard |
| `CopyCheck` | Copy confirmed, copied |
| `CopyMinus` | Copy remove |
| `CopyPlus` | Copy add, duplicate |
| `CopySlash` | Copy disabled |
| `CopyX` | Copy failed, copy error |
| `Clipboard` | Clipboard, paste buffer |
| `ClipboardCheck` | Clipboard confirmed, pasted |
| `ClipboardClock` | Clipboard pending, timed |
| `ClipboardCopy` | Clipboard copy action |
| `ClipboardEdit` | Clipboard edit |
| `ClipboardList` | Clipboard list, checklist |
| `ClipboardMinus` | Clipboard remove |
| `ClipboardPaste` | Paste from clipboard |
| `ClipboardPen` | Clipboard write, edit |
| `ClipboardPenLine` | Clipboard pen with line |
| `ClipboardPlus` | Clipboard add |
| `ClipboardSignature` | Clipboard sign, signature |
| `ClipboardType` | Clipboard text type |
| `ClipboardX` | Clipboard clear, remove |
| `Save` | Save, floppy disk, store |
| `SaveAll` | Save all, save multiple |
| `SaveOff` | Save disabled, unsaved |
| `Delete` | Delete key, backspace, remove |
| `Trash` | Trash, delete, discard, bin |
| `Trash2` | Trash alternate, delete, remove |
| `Edit` | Edit, pencil, modify |
| `Edit2` | Edit alternate, pencil |
| `Edit3` | Edit line, modify |
| `Pen` | Pen, write, compose |
| `PenBox` | Pen in box, edit mode |
| `PenLine` | Pen with line, write |
| `PenOff` | Pen disabled, read-only |
| `PenSquare` | Pen in square, edit |
| `PenTool` | Pen tool, vector draw |
| `Pencil` | Pencil, draw, write |
| `PencilLine` | Pencil with line, edit |
| `PencilOff` | Pencil disabled |
| `PencilRuler` | Pencil with ruler, design |
| `Undo` | Undo, revert, back |
| `Undo2` | Undo alternate |
| `UndoDot` | Undo with dot |
| `Redo` | Redo, repeat, forward |
| `Redo2` | Redo alternate |
| `RedoDot` | Redo with dot |
| `RefreshCcw` | Refresh counterclockwise, reload |
| `RefreshCcwDot` | Refresh CCW with dot |
| `RefreshCw` | Refresh clockwise, reload |
| `RefreshCwOff` | Refresh disabled |
| `RotateCcw` | Rotate counterclockwise |
| `RotateCcwKey` | Rotate CCW key |
| `RotateCcwSquare` | Rotate CCW square |
| `RotateCw` | Rotate clockwise |
| `RotateCwSquare` | Rotate CW square |
| `Rotate3d` | 3D rotation, transform |
| `Download` | Download, save file |
| `DownloadCloud` | Cloud download |
| `Upload` | Upload, send file |
| `UploadCloud` | Cloud upload |
| `Search` | Search, find, lookup, magnifier |
| `SearchAlert` | Search warning, alert |
| `SearchCheck` | Search confirmed, found |
| `SearchCode` | Search code, find in code |
| `SearchSlash` | Search disabled |
| `SearchX` | Search clear, no results |
| `Filter` | Filter, funnel, refine |
| `FilterX` | Filter clear, remove filter |
| `Funnel` | Funnel, filter, sort |
| `FunnelPlus` | Funnel add, add filter |
| `FunnelX` | Funnel remove, clear filter |
| `Replace` | Replace, swap, substitute |
| `ReplaceAll` | Replace all, find and replace |
| `Import` | Import, bring in |
| `Expand` | Expand, enlarge, grow |
| `Shrink` | Shrink, reduce, compact |
| `Maximize` | Maximize, fullscreen, enlarge |
| `Maximize2` | Maximize alternate |
| `Minimize` | Minimize, reduce, shrink |
| `Minimize2` | Minimize alternate |
| `Fullscreen` | Fullscreen, expand all |
| `Move` | Move, drag, reposition |
| `Move3d` | 3D move, transform |
| `MoveDiagonal` | Move diagonal |
| `MoveDiagonal2` | Move diagonal alternate |
| `MoveDown` | Move down |
| `MoveDownLeft` | Move down-left |
| `MoveDownRight` | Move down-right |
| `MoveHorizontal` | Move horizontal, resize width |
| `MoveLeft` | Move left |
| `MoveRight` | Move right |
| `MoveUp` | Move up |
| `MoveUpLeft` | Move up-left |
| `MoveUpRight` | Move up-right |
| `MoveVertical` | Move vertical, resize height |
| `Grab` | Grab, hand, drag handle |
| `Hand` | Hand, grab, pointer |
| `HandGrab` | Hand grab, dragging |
| `HandFist` | Hand fist, grab tight |
| `Ban` | Ban, block, prohibit, forbidden |
| `Archive` | Archive, store, box |
| `ArchiveRestore` | Archive restore, unarchive |
| `ArchiveX` | Archive remove, delete archive |
| `Recycle` | Recycle, reuse, refresh |
| `Combine` | Combine, merge, join |
| `Merge` | Merge, combine, join |
| `Split` | Split, separate, divide |
| `Ungroup` | Ungroup, separate |
| `Group` | Group, combine, cluster |
| `BringToFront` | Bring to front, layer up |
| `SendToBack` | Send to back, layer down |
| `FlipHorizontal` | Flip horizontal, mirror |
| `FlipHorizontal2` | Flip horizontal alternate |
| `FlipVertical` | Flip vertical, mirror |
| `FlipVertical2` | Flip vertical alternate |
| `FoldHorizontal` | Fold horizontal, collapse |
| `FoldVertical` | Fold vertical, collapse |
| `UnfoldHorizontal` | Unfold horizontal, expand |
| `UnfoldVertical` | Unfold vertical, expand |
| `ZoomIn` | Zoom in, magnify, enlarge |
| `ZoomOut` | Zoom out, reduce, shrink |
| `StretchHorizontal` | Stretch horizontal, widen |
| `StretchVertical` | Stretch vertical, heighten |
| `Scaling` | Scaling, resize, transform |
| `Scale3d` | 3D scale, resize |
| `Crop` | Crop, trim, cut image |
| `Scissors` | Scissors, cut, trim |
| `ScissorsLineDashed` | Scissors dashed cut line |
| `ScissorsSquare` | Scissors in square |
| `ScissorsSquareDashedBottom` | Scissors square dashed |
| `Slice` | Slice, cut, divide |
| `Scan` | Scan, recognize, read |
| `ScanBarcode` | Scan barcode, read code |
| `ScanEye` | Scan with eye, biometric |
| `ScanFace` | Scan face, facial recognition |
| `ScanHeart` | Scan heart, health scan |
| `ScanLine` | Scan line |
| `ScanQrCode` | Scan QR code |
| `ScanSearch` | Scan search, analyze |
| `ScanText` | Scan text, OCR |
| `SquareBottomDashedScissors` | Square dashed scissors |
| `SquareScissors` | Square scissors, cut |
| `Locate` | Locate, find position, GPS |
| `LocateFixed` | Locate fixed, GPS locked |
| `LocateOff` | Locate off, GPS disabled |
| `LocationEdit` | Location edit, change position |
| `Focus` | Focus, center, target |
| `Crosshair` | Crosshair, aim, target |
| `Target` | Target, goal, bullseye |
| `Goal` | Goal, target, objective |
| `Pin` | Pin, attach, thumbtack |
| `PinOff` | Unpin, detach, remove pin |
| `Pipette` | Pipette, color picker, eyedropper |
| `Stamp` | Stamp, seal, mark |
| `Sticker` | Sticker, label, tag |
| `Tag` | Tag, label, price |
| `Tags` | Tags, labels, multiple |
| `Bookmark` | Bookmark, save, favorite |
| `BookmarkCheck` | Bookmark confirmed |
| `BookmarkMinus` | Bookmark remove |
| `BookmarkPlus` | Bookmark add |
| `BookmarkX` | Bookmark delete |
| `Loader` | Loader, loading, spinner |
| `Loader2` | Loader alternate, spinner |
| `LoaderCircle` | Loader circle, loading |
| `LoaderPinwheel` | Loader pinwheel, spinner |
| `IterationCcw` | Iterate counterclockwise |
| `IterationCw` | Iterate clockwise |
| `Diff` | Diff, compare, changes |
| `SortAsc` | Sort ascending, A-Z |
| `SortDesc` | Sort descending, Z-A |
| `Outdent` | Outdent, decrease indent |
| `Indent` | Indent, increase indent |
| `IndentDecrease` | Decrease indentation |
| `IndentIncrease` | Increase indentation |
| `Magnet` | Magnet, attract, snap |
| `Wand` | Wand, magic, auto |
| `Wand2` | Wand alternate, magic |
| `WandSparkles` | Magic wand sparkles, auto-fix |
| `Sparkle` | Sparkle, magic, AI, new |
| `Sparkles` | Sparkles, magic, AI, effects |
| `Zap` | Zap, lightning, quick action, flash |
| `ZapOff` | Zap off, disabled |
| `Power` | Power, on/off, switch |
| `PowerCircle` | Power circle |
| `PowerOff` | Power off, shutdown |
| `PowerSquare` | Power square |
| `ToggleLeft` | Toggle left, switch off |
| `ToggleRight` | Toggle right, switch on |
| `Lasso` | Lasso, select area |
| `LassoSelect` | Lasso select, freeform |
| `BoxSelect` | Box select, rectangle select |
| `MousePointer` | Mouse pointer, cursor |
| `MousePointer2` | Mouse pointer alternate |
| `MousePointer2Off` | Mouse pointer off |
| `MousePointerBan` | Mouse pointer banned |
| `MousePointerClick` | Mouse click, tap |
| `MousePointerSquareDashed` | Mouse pointer dashed square |
| `SquareDashedMousePointer` | Dashed square mouse pointer |
| `SquareMousePointer` | Square mouse pointer |
| `Pointer` | Pointer, cursor, hand |
| `PointerOff` | Pointer off, disabled |
| `Slash` | Slash, separator, divide |
| `Option` | Option, alt key, choice |
| `Command` | Command key, meta |
| `Space` | Space, spacebar |
| `Hash` | Hash, number, pound sign |
| `Asterisk` | Asterisk, star, wildcard |
| `AsteriskSquare` | Asterisk in square |
| `SquareAsterisk` | Square with asterisk |
| `Ampersand` | Ampersand, and symbol |
| `Ampersands` | Multiple ampersands |
| `AtSign` | At sign, email, mention |
| `Percent` | Percent, percentage |
| `PercentCircle` | Percent in circle |
| `PercentDiamond` | Percent in diamond |
| `PercentSquare` | Percent in square |

### Arrows and Chevrons

Directional arrows, chevrons, and navigation indicators.

| Icon | Description |
|------|-------------|
| `ArrowBigDown` | Big arrow down |
| `ArrowBigDownDash` | Big arrow down dashed |
| `ArrowBigLeft` | Big arrow left |
| `ArrowBigLeftDash` | Big arrow left dashed |
| `ArrowBigRight` | Big arrow right |
| `ArrowBigRightDash` | Big arrow right dashed |
| `ArrowBigUp` | Big arrow up |
| `ArrowBigUpDash` | Big arrow up dashed |
| `ArrowDown` | Arrow down, descend |
| `ArrowDown01` | Arrow down 0-1, sort numeric asc |
| `ArrowDown10` | Arrow down 1-0, sort numeric desc |
| `ArrowDownAZ` | Arrow down A-Z, sort alpha asc |
| `ArrowDownCircle` | Arrow down circle |
| `ArrowDownFromLine` | Arrow down from line |
| `ArrowDownLeft` | Arrow down-left, diagonal |
| `ArrowDownLeftFromCircle` | Arrow down-left from circle |
| `ArrowDownLeftFromSquare` | Arrow down-left from square |
| `ArrowDownLeftSquare` | Arrow down-left in square |
| `ArrowDownNarrowWide` | Sort narrow to wide |
| `ArrowDownRight` | Arrow down-right, diagonal |
| `ArrowDownRightFromCircle` | Arrow down-right from circle |
| `ArrowDownRightFromSquare` | Arrow down-right from square |
| `ArrowDownRightSquare` | Arrow down-right in square |
| `ArrowDownSquare` | Arrow down in square |
| `ArrowDownToDot` | Arrow down to dot |
| `ArrowDownToLine` | Arrow down to line |
| `ArrowDownUp` | Arrow down-up, sort, swap |
| `ArrowDownWideNarrow` | Sort wide to narrow |
| `ArrowDownZA` | Arrow down Z-A, sort alpha desc |
| `ArrowLeft` | Arrow left, back, previous |
| `ArrowLeftCircle` | Arrow left circle |
| `ArrowLeftFromLine` | Arrow left from line |
| `ArrowLeftRight` | Arrow left-right, swap, exchange |
| `ArrowLeftSquare` | Arrow left in square |
| `ArrowLeftToLine` | Arrow left to line |
| `ArrowRight` | Arrow right, next, forward |
| `ArrowRightCircle` | Arrow right circle |
| `ArrowRightFromLine` | Arrow right from line |
| `ArrowRightLeft` | Arrow right-left, swap |
| `ArrowRightSquare` | Arrow right in square |
| `ArrowRightToLine` | Arrow right to line |
| `ArrowUp` | Arrow up, ascend |
| `ArrowUp01` | Arrow up 0-1, sort asc |
| `ArrowUp10` | Arrow up 1-0, sort desc |
| `ArrowUpAZ` | Arrow up A-Z, sort alpha |
| `ArrowUpCircle` | Arrow up circle |
| `ArrowUpDown` | Arrow up-down, sort, reorder |
| `ArrowUpFromDot` | Arrow up from dot |
| `ArrowUpFromLine` | Arrow up from line |
| `ArrowUpLeft` | Arrow up-left, diagonal |
| `ArrowUpLeftFromCircle` | Arrow up-left from circle |
| `ArrowUpLeftFromSquare` | Arrow up-left from square |
| `ArrowUpLeftSquare` | Arrow up-left in square |
| `ArrowUpNarrowWide` | Sort narrow to wide up |
| `ArrowUpRight` | Arrow up-right, diagonal, external |
| `ArrowUpRightFromCircle` | Arrow up-right from circle |
| `ArrowUpRightFromSquare` | Arrow up-right from square, external link |
| `ArrowUpRightSquare` | Arrow up-right in square |
| `ArrowUpSquare` | Arrow up in square |
| `ArrowUpToLine` | Arrow up to line |
| `ArrowUpWideNarrow` | Sort wide to narrow up |
| `ArrowUpZA` | Arrow up Z-A, sort alpha desc |
| `ArrowsUpFromLine` | Arrows up from line, multiple |
| `ChevronDown` | Chevron down, expand, dropdown |
| `ChevronDownCircle` | Chevron down circle |
| `ChevronDownSquare` | Chevron down square |
| `ChevronFirst` | Chevron first, skip to start |
| `ChevronLast` | Chevron last, skip to end |
| `ChevronLeft` | Chevron left, back, previous |
| `ChevronLeftCircle` | Chevron left circle |
| `ChevronLeftSquare` | Chevron left square |
| `ChevronRight` | Chevron right, next, forward |
| `ChevronRightCircle` | Chevron right circle |
| `ChevronRightSquare` | Chevron right square |
| `ChevronUp` | Chevron up, collapse |
| `ChevronUpCircle` | Chevron up circle |
| `ChevronUpSquare` | Chevron up square |
| `ChevronsDown` | Double chevron down, fast scroll |
| `ChevronsDownUp` | Chevrons down-up, collapse |
| `ChevronsLeft` | Double chevron left, fast back |
| `ChevronsLeftRight` | Chevrons left-right, expand |
| `ChevronsLeftRightEllipsis` | Chevrons expand ellipsis |
| `ChevronsRight` | Double chevron right, fast forward |
| `ChevronsRightLeft` | Chevrons right-left, collapse |
| `ChevronsUp` | Double chevron up, fast scroll |
| `ChevronsUpDown` | Chevrons up-down, select, sort |
| `CircleArrowDown` | Circle arrow down |
| `CircleArrowLeft` | Circle arrow left |
| `CircleArrowOutDownLeft` | Circle arrow out down-left |
| `CircleArrowOutDownRight` | Circle arrow out down-right |
| `CircleArrowOutUpLeft` | Circle arrow out up-left |
| `CircleArrowOutUpRight` | Circle arrow out up-right |
| `CircleArrowRight` | Circle arrow right |
| `CircleArrowUp` | Circle arrow up |
| `CircleChevronDown` | Circle chevron down |
| `CircleChevronLeft` | Circle chevron left |
| `CircleChevronRight` | Circle chevron right |
| `CircleChevronUp` | Circle chevron up |
| `CircleFadingArrowUp` | Circle fading arrow up |
| `CornerDownLeft` | Corner down-left, enter |
| `CornerDownRight` | Corner down-right |
| `CornerLeftDown` | Corner left-down |
| `CornerLeftUp` | Corner left-up |
| `CornerRightDown` | Corner right-down |
| `CornerRightUp` | Corner right-up |
| `CornerUpLeft` | Corner up-left |
| `CornerUpRight` | Corner up-right |
| `SquareArrowDown` | Square arrow down |
| `SquareArrowDownLeft` | Square arrow down-left |
| `SquareArrowDownRight` | Square arrow down-right |
| `SquareArrowLeft` | Square arrow left |
| `SquareArrowOutDownLeft` | Square arrow out down-left |
| `SquareArrowOutDownRight` | Square arrow out down-right |
| `SquareArrowOutUpLeft` | Square arrow out up-left |
| `SquareArrowOutUpRight` | Square arrow out up-right, external link |
| `SquareArrowRight` | Square arrow right |
| `SquareArrowUp` | Square arrow up |
| `SquareArrowUpLeft` | Square arrow up-left |
| `SquareArrowUpRight` | Square arrow up-right |
| `SquareChevronDown` | Square chevron down |
| `SquareChevronLeft` | Square chevron left |
| `SquareChevronRight` | Square chevron right |
| `SquareChevronUp` | Square chevron up |
| `ExternalLink` | External link, open new tab |

### Charts and Analytics

Charts, graphs, data visualization, and analytics indicators.

| Icon | Description |
|------|-------------|
| `AreaChart` | Area chart, graph, analytics |
| `BarChart` | Bar chart, analytics, graph |
| `BarChart2` | Bar chart alternate |
| `BarChart3` | Bar chart triple |
| `BarChart4` | Bar chart quad |
| `BarChartBig` | Bar chart large |
| `BarChartHorizontal` | Horizontal bar chart |
| `BarChartHorizontalBig` | Horizontal bar chart large |
| `CandlestickChart` | Candlestick chart, stocks, trading |
| `ChartArea` | Chart area, fill graph |
| `ChartBar` | Chart bar, analytics |
| `ChartBarBig` | Chart bar large |
| `ChartBarDecreasing` | Chart bar decreasing, decline |
| `ChartBarIncreasing` | Chart bar increasing, growth |
| `ChartBarStacked` | Chart bar stacked, grouped |
| `ChartCandlestick` | Candlestick chart, finance |
| `ChartColumn` | Chart column, vertical bar |
| `ChartColumnBig` | Chart column large |
| `ChartColumnDecreasing` | Chart column decreasing |
| `ChartColumnIncreasing` | Chart column increasing |
| `ChartColumnStacked` | Chart column stacked |
| `ChartGantt` | Gantt chart, project timeline |
| `ChartLine` | Line chart, trend, graph |
| `ChartNetwork` | Network chart, topology |
| `ChartNoAxesColumn` | Column chart without axes |
| `ChartNoAxesColumnDecreasing` | Column chart no axes decreasing |
| `ChartNoAxesColumnIncreasing` | Column chart no axes increasing |
| `ChartNoAxesCombined` | Combined chart without axes |
| `ChartNoAxesGantt` | Gantt chart without axes |
| `ChartPie` | Pie chart, donut, breakdown |
| `ChartScatter` | Scatter chart, plot, distribution |
| `ChartSpline` | Spline chart, smooth line |
| `FileBarChart` | File bar chart, report |
| `FileBarChart2` | File bar chart alternate |
| `FileChartColumn` | File chart column |
| `FileChartColumnIncreasing` | File chart column increasing |
| `FileChartLine` | File chart line |
| `FileChartPie` | File chart pie |
| `FileLineChart` | File line chart |
| `FilePieChart` | File pie chart |
| `GanttChart` | Gantt chart, project plan |
| `GanttChartSquare` | Gantt chart in square |
| `LineChart` | Line chart, trend |
| `PieChart` | Pie chart, breakdown |
| `ScatterChart` | Scatter chart, data points |
| `TrendingDown` | Trending down, decrease, decline |
| `TrendingUp` | Trending up, increase, growth |
| `TrendingUpDown` | Trending up and down, volatile |
| `Activity` | Activity, pulse, heartbeat, analytics |
| `ActivitySquare` | Activity in square |
| `SquareActivity` | Square activity pulse |
| `Gauge` | Gauge, meter, speedometer |
| `GaugeCircle` | Gauge circle, meter |
| `CircleGauge` | Circle gauge, speedometer |
| `Proportions` | Proportions, ratio, analytics |
| `Ratio` | Ratio, aspect, proportion |
| `Sigma` | Sigma, sum, total |
| `SigmaSquare` | Sigma in square |
| `SquareSigma` | Square with sigma |
| `Waypoints` | Waypoints, data flow, path |

### Communication

Mail, messaging, notifications, phone, and social communication.

| Icon | Description |
|------|-------------|
| `Mail` | Mail, email, envelope, message |
| `MailCheck` | Mail confirmed, email sent |
| `MailMinus` | Mail remove |
| `MailOpen` | Mail open, read email |
| `MailPlus` | Mail add, compose email |
| `MailQuestion` | Mail question, unknown email |
| `MailQuestionMark` | Mail question mark |
| `MailSearch` | Mail search, find email |
| `MailWarning` | Mail warning, email alert |
| `MailX` | Mail error, email failed |
| `Mailbox` | Mailbox, inbox |
| `Mails` | Multiple mails, emails |
| `Inbox` | Inbox, received messages |
| `MessageCircle` | Message circle, chat bubble |
| `MessageCircleCode` | Message circle code, dev chat |
| `MessageCircleDashed` | Message circle dashed, draft |
| `MessageCircleHeart` | Message circle heart, love |
| `MessageCircleMore` | Message circle more, typing |
| `MessageCircleOff` | Message circle off, muted |
| `MessageCirclePlus` | Message circle add, new message |
| `MessageCircleQuestion` | Message circle question, help |
| `MessageCircleQuestionMark` | Message circle question mark |
| `MessageCircleReply` | Message circle reply |
| `MessageCircleWarning` | Message circle warning |
| `MessageCircleX` | Message circle close |
| `MessageSquare` | Message square, comment |
| `MessageSquareCode` | Message square code |
| `MessageSquareDashed` | Message square dashed, draft |
| `MessageSquareDiff` | Message square diff, compare |
| `MessageSquareDot` | Message square dot, unread |
| `MessageSquareHeart` | Message square heart, favorite |
| `MessageSquareLock` | Message square lock, encrypted |
| `MessageSquareMore` | Message square more, typing |
| `MessageSquareOff` | Message square off, muted |
| `MessageSquarePlus` | Message square add |
| `MessageSquareQuote` | Message square quote, reply |
| `MessageSquareReply` | Message square reply |
| `MessageSquareShare` | Message square share, forward |
| `MessageSquareText` | Message square text |
| `MessageSquareWarning` | Message square warning |
| `MessageSquareX` | Message square close |
| `MessagesSquare` | Messages square, conversation |
| `BotMessageSquare` | Bot message, AI chat, assistant |
| `Phone` | Phone, call, telephone |
| `PhoneCall` | Phone call, calling, ring |
| `PhoneForwarded` | Phone forwarded, redirect |
| `PhoneIncoming` | Phone incoming, receiving call |
| `PhoneMissed` | Phone missed, missed call |
| `PhoneOff` | Phone off, do not disturb |
| `PhoneOutgoing` | Phone outgoing, dialing |
| `Send` | Send, submit, paper plane |
| `SendHorizonal` | Send horizontal |
| `SendHorizontal` | Send horizontal, submit |
| `Bell` | Bell, notification, alert |
| `BellDot` | Bell with dot, new notification |
| `BellElectric` | Electric bell, alarm |
| `BellMinus` | Bell minus, mute notification |
| `BellOff` | Bell off, notifications muted |
| `BellPlus` | Bell plus, add notification |
| `BellRing` | Bell ringing, active notification |
| `ConciergeBell` | Concierge bell, service |
| `Megaphone` | Megaphone, announce, broadcast |
| `MegaphoneOff` | Megaphone off, mute |
| `Reply` | Reply, respond |
| `ReplyAll` | Reply all, respond to all |
| `Forward` | Forward, share, pass on |
| `Voicemail` | Voicemail, audio message |
| `Rss` | RSS feed, subscribe |
| `Podcast` | Podcast, audio show |
| `Speech` | Speech, talk, voice |
| `AudioLines` | Audio lines, sound wave |
| `AudioWaveform` | Audio waveform, sound |
| `Captions` | Captions, subtitles, CC |
| `CaptionsOff` | Captions off, no subtitles |
| `Subtitles` | Subtitles, captions |
| `Languages` | Languages, translate, i18n |
| `Quote` | Quote, blockquote, citation |
| `TextQuote` | Text quote, citation |

### Devices and Hardware

Monitors, phones, laptops, peripherals, servers, and connectivity.

| Icon | Description |
|------|-------------|
| `Monitor` | Monitor, display, screen |
| `MonitorCheck` | Monitor check, verified |
| `MonitorCloud` | Monitor cloud, cloud desktop |
| `MonitorCog` | Monitor settings, config |
| `MonitorDot` | Monitor with dot, active |
| `MonitorDown` | Monitor down, download |
| `MonitorOff` | Monitor off, display off |
| `MonitorPause` | Monitor pause |
| `MonitorPlay` | Monitor play, streaming |
| `MonitorSmartphone` | Monitor smartphone, responsive |
| `MonitorSpeaker` | Monitor speaker, audio |
| `MonitorStop` | Monitor stop |
| `MonitorUp` | Monitor up, upload |
| `MonitorX` | Monitor error, close |
| `Laptop` | Laptop, notebook computer |
| `Laptop2` | Laptop alternate |
| `LaptopMinimal` | Laptop minimal, MacBook |
| `LaptopMinimalCheck` | Laptop minimal check |
| `Smartphone` | Smartphone, mobile, phone |
| `SmartphoneCharging` | Smartphone charging |
| `SmartphoneNfc` | Smartphone NFC, tap |
| `Tablet` | Tablet, iPad, device |
| `TabletSmartphone` | Tablet smartphone, devices |
| `Computer` | Computer, desktop, PC |
| `PcCase` | PC case, tower, desktop |
| `Mouse` | Mouse, click device |
| `MouseOff` | Mouse off, disabled |
| `Keyboard` | Keyboard, typing, keys |
| `KeyboardMusic` | Keyboard music, MIDI |
| `KeyboardOff` | Keyboard off, disabled |
| `Touchpad` | Touchpad, trackpad |
| `TouchpadOff` | Touchpad off, disabled |
| `Cpu` | CPU, processor, chip |
| `Gpu` | GPU, graphics card |
| `Microchip` | Microchip, IC, processor |
| `CircuitBoard` | Circuit board, PCB, electronics |
| `MemoryStick` | Memory stick, RAM |
| `Server` | Server, backend, hosting |
| `ServerCog` | Server settings, configure |
| `ServerCrash` | Server crash, error, down |
| `ServerOff` | Server off, offline |
| `HardDrive` | Hard drive, storage, disk |
| `HardDriveDownload` | Hard drive download |
| `HardDriveUpload` | Hard drive upload |
| `Battery` | Battery, power level |
| `BatteryCharging` | Battery charging |
| `BatteryFull` | Battery full, charged |
| `BatteryLow` | Battery low, charge needed |
| `BatteryMedium` | Battery medium |
| `BatteryPlus` | Battery plus, add charge |
| `BatteryWarning` | Battery warning, low power |
| `Printer` | Printer, print, output |
| `PrinterCheck` | Printer check, print complete |
| `Camera` | Camera, photo, capture |
| `CameraOff` | Camera off, no photo |
| `Webcam` | Webcam, video camera |
| `Cctv` | CCTV, security camera, surveillance |
| `Mic` | Microphone, record, audio |
| `Mic2` | Microphone alternate |
| `MicOff` | Microphone off, muted |
| `MicVocal` | Microphone vocal, singing |
| `Speaker` | Speaker, audio output, sound |
| `Headphones` | Headphones, listen, audio |
| `HeadphoneOff` | Headphones off |
| `Headset` | Headset, support, call center |
| `Tv` | TV, television, screen |
| `Tv2` | TV alternate |
| `TvMinimal` | TV minimal, display |
| `TvMinimalPlay` | TV minimal play, streaming |
| `Usb` | USB, flash drive, port |
| `HdmiPort` | HDMI port, video output |
| `EthernetPort` | Ethernet port, network |
| `Plug` | Plug, power, connect |
| `Plug2` | Plug alternate |
| `PlugZap` | Plug zap, power surge |
| `PlugZap2` | Plug zap alternate |
| `Unplug` | Unplug, disconnect |
| `Cable` | Cable, wire, connection |
| `Router` | Router, network, wifi |
| `Wifi` | WiFi, wireless, internet |
| `WifiCog` | WiFi settings |
| `WifiHigh` | WiFi high signal |
| `WifiLow` | WiFi low signal |
| `WifiOff` | WiFi off, no connection |
| `WifiPen` | WiFi edit |
| `WifiSync` | WiFi sync |
| `WifiZero` | WiFi zero, no signal |
| `Bluetooth` | Bluetooth, wireless |
| `BluetoothConnected` | Bluetooth connected |
| `BluetoothOff` | Bluetooth off |
| `BluetoothSearching` | Bluetooth searching |
| `Nfc` | NFC, tap, contactless |
| `Signal` | Signal, reception, bars |
| `SignalHigh` | Signal high, strong |
| `SignalLow` | Signal low, weak |
| `SignalMedium` | Signal medium |
| `SignalZero` | Signal zero, no reception |
| `Antenna` | Antenna, broadcast, receive |
| `SatelliteDish` | Satellite dish, signal |
| `Satellite` | Satellite, space, GPS |
| `RadioTower` | Radio tower, broadcast |
| `RadioReceiver` | Radio receiver, tune |
| `Airplay` | AirPlay, cast, stream |
| `Cast` | Cast, screen share, Chromecast |
| `ScreenShare` | Screen share, present |
| `ScreenShareOff` | Screen share off |
| `Projector` | Projector, presentation, display |
| `Joystick` | Joystick, game controller |
| `Gamepad` | Gamepad, game controller |
| `Gamepad2` | Gamepad alternate |
| `GamepadDirectional` | Gamepad directional pad |
| `SolarPanel` | Solar panel, renewable energy |
| `EvCharger` | EV charger, electric vehicle |
| `Drone` | Drone, UAV, aerial |
| `Radar` | Radar, detect, scan |
| `Telescope` | Telescope, observe, astronomy |

### Development

Code, programming, version control, terminal, and developer tools.

| Icon | Description |
|------|-------------|
| `Code` | Code, source, programming |
| `Code2` | Code alternate, development |
| `CodeSquare` | Code in square |
| `SquareCode` | Square with code |
| `CodeXml` | XML code, markup, HTML |
| `Bug` | Bug, error, defect, issue |
| `BugOff` | Bug off, bug fixed |
| `BugPlay` | Bug play, debug, run test |
| `GitBranch` | Git branch, version control |
| `GitBranchMinus` | Git branch delete |
| `GitBranchPlus` | Git branch create |
| `GitCommit` | Git commit, save change |
| `GitCommitHorizontal` | Git commit horizontal |
| `GitCommitVertical` | Git commit vertical |
| `GitCompare` | Git compare, diff |
| `GitCompareArrows` | Git compare arrows |
| `GitFork` | Git fork, clone repo |
| `GitGraph` | Git graph, commit history |
| `GitMerge` | Git merge, combine branches |
| `GitPullRequest` | Git pull request, PR |
| `GitPullRequestArrow` | Git PR arrow |
| `GitPullRequestClosed` | Git PR closed |
| `GitPullRequestCreate` | Git PR create |
| `GitPullRequestCreateArrow` | Git PR create arrow |
| `GitPullRequestDraft` | Git PR draft |
| `Terminal` | Terminal, command line, console |
| `TerminalSquare` | Terminal in square |
| `SquareTerminal` | Square with terminal |
| `Braces` | Braces, curly brackets, JSON |
| `CurlyBraces` | Curly braces, JSON, object |
| `Brackets` | Brackets, array, list |
| `Parentheses` | Parentheses, expression |
| `Regex` | Regex, regular expression, pattern |
| `Binary` | Binary, 01, machine code |
| `Variable` | Variable, parameter, dynamic |
| `FunctionSquare` | Function, method, lambda |
| `SquareFunction` | Square with function |
| `Webhook` | Webhook, callback, endpoint |
| `WebhookOff` | Webhook off, disabled |
| `Database` | Database, storage, SQL |
| `DatabaseBackup` | Database backup |
| `DatabaseZap` | Database zap, fast query |
| `Codepen` | CodePen, playground |
| `Codesandbox` | CodeSandbox, playground |
| `FileCode` | File code, source file |
| `FileCode2` | File code alternate |
| `FileCodeCorner` | File code corner |
| `FileJson` | File JSON, config |
| `FileJson2` | File JSON alternate |
| `FileTerminal` | File terminal, script |
| `FileBraces` | File braces, JSON file |
| `FileBracesCorner` | File braces corner |
| `FolderCode` | Folder code, source directory |
| `FolderGit` | Folder git, repository |
| `FolderGit2` | Folder git alternate |
| `Bot` | Bot, robot, automation |
| `BotOff` | Bot off, disabled |
| `Container` | Container, Docker, box |
| `Blocks` | Blocks, modules, components |
| `Component` | Component, module, part |
| `Workflow` | Workflow, pipeline, process |
| `Network` | Network, connected, topology |
| `Orbit` | Orbit, cycle, revolve |
| `Pi` | Pi, mathematics, constant |
| `PiSquare` | Pi in square |
| `SquarePi` | Square with pi |
| `Omega` | Omega, end, last |
| `Infinity` | Infinity, unlimited, loop |
| `Equal` | Equal, same, compare |
| `EqualApproximately` | Approximately equal |
| `EqualNot` | Not equal, different |
| `EqualSquare` | Equal in square |
| `SquareEqual` | Square with equal |
| `Divide` | Divide, split, math |
| `DivideCircle` | Divide circle |
| `DivideSquare` | Divide square |
| `SquareDivide` | Square with divide |
| `Radical` | Radical, square root, math |
| `SquareRadical` | Square with radical |
| `Axis3d` | 3D axis, coordinate system |
| `Inspect` | Inspect, examine, debug |
| `InspectionPanel` | Inspection panel, review |

### Files and Documents

Files, folders, documents, notebooks, and books.

| Icon | Description |
|------|-------------|
| `File` | File, document, page |
| `FileArchive` | File archive, ZIP, compressed |
| `FileAudio` | File audio, music file |
| `FileAudio2` | File audio alternate |
| `FileAxis3d` | File 3D axis |
| `FileBadge` | File badge, certified |
| `FileBadge2` | File badge alternate |
| `FileBox` | File box, package |
| `FileCheck` | File check, verified |
| `FileCheck2` | File check alternate |
| `FileCheckCorner` | File check corner |
| `FileClock` | File clock, recent, history |
| `FileCog` | File settings, config |
| `FileCog2` | File settings alternate |
| `FileDiff` | File diff, compare changes |
| `FileDigit` | File digit, numeric |
| `FileDown` | File down, download file |
| `FileEdit` | File edit, modify |
| `FileExclamationPoint` | File exclamation, warning |
| `FileHeadphone` | File headphone, audio |
| `FileHeart` | File heart, favorite |
| `FileImage` | File image, photo, picture |
| `FileInput` | File input, import file |
| `FileKey` | File key, encrypted file |
| `FileKey2` | File key alternate |
| `FileLock` | File lock, protected |
| `FileLock2` | File lock alternate |
| `FileMinus` | File minus, remove file |
| `FileMinus2` | File minus alternate |
| `FileMinusCorner` | File minus corner |
| `FileMusic` | File music, audio file |
| `FileOutput` | File output, export file |
| `FilePen` | File pen, edit file |
| `FilePenLine` | File pen line |
| `FilePlay` | File play, media file |
| `FilePlus` | File plus, new file |
| `FilePlus2` | File plus alternate |
| `FilePlusCorner` | File plus corner |
| `FileQuestion` | File question, unknown |
| `FileQuestionMark` | File question mark |
| `FileScan` | File scan, analyze |
| `FileSearch` | File search, find file |
| `FileSearch2` | File search alternate |
| `FileSearchCorner` | File search corner |
| `FileSignal` | File signal, broadcast |
| `FileSignature` | File signature, sign |
| `FileSliders` | File sliders, settings |
| `FileSpreadsheet` | File spreadsheet, Excel, CSV |
| `FileStack` | File stack, multiple files |
| `FileSymlink` | File symlink, shortcut |
| `FileText` | File text, document, readme |
| `FileType` | File type, format |
| `FileType2` | File type alternate |
| `FileTypeCorner` | File type corner |
| `FileUp` | File up, upload file |
| `FileUser` | File user, personal |
| `FileVideo` | File video, movie file |
| `FileVideo2` | File video alternate |
| `FileVideoCamera` | File video camera |
| `FileVolume` | File volume, audio file |
| `FileVolume2` | File volume alternate |
| `FileWarning` | File warning, error |
| `FileX` | File X, delete file |
| `FileX2` | File X alternate |
| `FileXCorner` | File X corner |
| `Files` | Files, multiple documents |
| `Folder` | Folder, directory |
| `FolderArchive` | Folder archive, ZIP |
| `FolderCheck` | Folder check, verified |
| `FolderClock` | Folder clock, recent |
| `FolderClosed` | Folder closed |
| `FolderCog` | Folder settings |
| `FolderCog2` | Folder settings alternate |
| `FolderDot` | Folder dot, hidden |
| `FolderDown` | Folder download |
| `FolderEdit` | Folder edit, rename |
| `FolderHeart` | Folder heart, favorite |
| `FolderInput` | Folder input, import |
| `FolderKanban` | Folder kanban, project |
| `FolderKey` | Folder key, encrypted |
| `FolderLock` | Folder lock, protected |
| `FolderMinus` | Folder minus, remove |
| `FolderOpen` | Folder open, expanded |
| `FolderOpenDot` | Folder open dot |
| `FolderOutput` | Folder output, export |
| `FolderPen` | Folder pen, edit |
| `FolderPlus` | Folder plus, new folder |
| `FolderRoot` | Folder root, home dir |
| `FolderSearch` | Folder search, find |
| `FolderSearch2` | Folder search alternate |
| `FolderSymlink` | Folder symlink, shortcut |
| `FolderSync` | Folder sync, synchronize |
| `FolderTree` | Folder tree, file tree |
| `FolderUp` | Folder up, parent dir |
| `FolderX` | Folder X, delete folder |
| `Folders` | Folders, multiple dirs |
| `Notebook` | Notebook, journal, diary |
| `NotebookPen` | Notebook pen, write |
| `NotebookTabs` | Notebook tabs, sections |
| `NotebookText` | Notebook text |
| `NotepadText` | Notepad text, notes |
| `NotepadTextDashed` | Notepad text dashed, draft |
| `StickyNote` | Sticky note, post-it, memo |
| `Scroll` | Scroll, document, ancient |
| `ScrollText` | Scroll text, document |
| `Book` | Book, read, manual |
| `BookA` | Book A, language |
| `BookAlert` | Book alert, warning |
| `BookAudio` | Book audio, audiobook |
| `BookCheck` | Book check, complete |
| `BookCopy` | Book copy, duplicate |
| `BookDashed` | Book dashed, draft |
| `BookDown` | Book download |
| `BookHeadphones` | Book headphones, audiobook |
| `BookHeart` | Book heart, favorite |
| `BookImage` | Book image, picture |
| `BookKey` | Book key, encrypted |
| `BookLock` | Book lock, protected |
| `BookMarked` | Book marked, bookmark |
| `BookMinus` | Book minus, remove |
| `BookOpen` | Book open, read, manual |
| `BookOpenCheck` | Book open check, verified |
| `BookOpenText` | Book open text, reading |
| `BookPlus` | Book plus, add |
| `BookSearch` | Book search, lookup |
| `BookTemplate` | Book template |
| `BookText` | Book text, content |
| `BookType` | Book type, font |
| `BookUp` | Book upload |
| `BookUp2` | Book upload alternate |
| `BookUser` | Book user, profile |
| `BookX` | Book X, remove |
| `Library` | Library, books, collection |
| `LibraryBig` | Library big, collection |
| `LibrarySquare` | Library in square |
| `SquareLibrary` | Square with library |
| `Paperclip` | Paperclip, attachment, file attach |
| `Image` | Image, photo, picture |
| `ImageDown` | Image download |
| `ImageMinus` | Image minus, remove |
| `ImageOff` | Image off, broken |
| `ImagePlay` | Image play, video thumbnail |
| `ImagePlus` | Image plus, add photo |
| `ImageUp` | Image upload |
| `ImageUpscale` | Image upscale, enhance |
| `Images` | Images, gallery, photos |
| `Album` | Album, collection, gallery |

### Layout and Interface

Layout, panels, grids, lists, menus, sidebars, tables, and UI structure.

| Icon | Description |
|------|-------------|
| `Layout` | Layout, template, page |
| `LayoutDashboard` | Layout dashboard, admin |
| `LayoutGrid` | Layout grid, tiles |
| `LayoutList` | Layout list, rows |
| `LayoutPanelLeft` | Layout panel left, sidebar |
| `LayoutPanelTop` | Layout panel top, header |
| `LayoutTemplate` | Layout template, wireframe |
| `PanelBottom` | Panel bottom |
| `PanelBottomClose` | Panel bottom close |
| `PanelBottomDashed` | Panel bottom dashed |
| `PanelBottomInactive` | Panel bottom inactive |
| `PanelBottomOpen` | Panel bottom open |
| `PanelLeft` | Panel left, sidebar |
| `PanelLeftClose` | Panel left close |
| `PanelLeftDashed` | Panel left dashed |
| `PanelLeftInactive` | Panel left inactive |
| `PanelLeftOpen` | Panel left open |
| `PanelLeftRightDashed` | Panel left-right dashed |
| `PanelRight` | Panel right |
| `PanelRightClose` | Panel right close |
| `PanelRightDashed` | Panel right dashed |
| `PanelRightInactive` | Panel right inactive |
| `PanelRightOpen` | Panel right open |
| `PanelTop` | Panel top, header |
| `PanelTopBottomDashed` | Panel top-bottom dashed |
| `PanelTopClose` | Panel top close |
| `PanelTopDashed` | Panel top dashed |
| `PanelTopInactive` | Panel top inactive |
| `PanelTopOpen` | Panel top open |
| `PanelsLeftBottom` | Panels left-bottom |
| `PanelsLeftRight` | Panels left-right, split |
| `PanelsRightBottom` | Panels right-bottom |
| `PanelsTopBottom` | Panels top-bottom, split |
| `PanelsTopLeft` | Panels top-left |
| `Grid` | Grid, tiles, matrix |
| `Grid2x2` | Grid 2x2, tiles |
| `Grid2x2Check` | Grid 2x2 check |
| `Grid2x2Plus` | Grid 2x2 plus, add tile |
| `Grid2x2X` | Grid 2x2 X, remove |
| `Grid3x2` | Grid 3x2, layout |
| `Grid3x3` | Grid 3x3, matrix |
| `Grip` | Grip, drag handle |
| `GripHorizontal` | Grip horizontal, drag |
| `GripVertical` | Grip vertical, drag |
| `List` | List, items, menu |
| `ListCheck` | List check, todo done |
| `ListChecks` | List checks, completed |
| `ListChevronsDownUp` | List chevrons collapse |
| `ListChevronsUpDown` | List chevrons expand |
| `ListCollapse` | List collapse, minimize |
| `ListEnd` | List end, bottom |
| `ListFilter` | List filter, refine |
| `ListFilterPlus` | List filter add |
| `ListIndentDecrease` | List indent decrease |
| `ListIndentIncrease` | List indent increase |
| `ListMinus` | List minus, remove item |
| `ListMusic` | List music, playlist |
| `ListOrdered` | List ordered, numbered |
| `ListPlus` | List plus, add item |
| `ListRestart` | List restart, reset |
| `ListStart` | List start, top |
| `ListTodo` | List todo, tasks |
| `ListTree` | List tree, hierarchy |
| `ListVideo` | List video, playlist |
| `ListX` | List X, clear list |
| `Menu` | Menu, hamburger, nav |
| `MenuSquare` | Menu in square |
| `SquareMenu` | Square with menu |
| `Sidebar` | Sidebar, nav panel |
| `SidebarClose` | Sidebar close |
| `SidebarOpen` | Sidebar open |
| `Columns` | Columns, multi-column |
| `Columns2` | Two columns |
| `Columns3` | Three columns |
| `Columns3Cog` | Three columns settings |
| `Columns4` | Four columns |
| `ColumnsSettings` | Columns settings |
| `Rows` | Rows, horizontal layout |
| `Rows2` | Two rows |
| `Rows3` | Three rows |
| `Rows4` | Four rows |
| `SplitSquareHorizontal` | Split horizontal |
| `SplitSquareVertical` | Split vertical |
| `SquareSplitHorizontal` | Square split horizontal |
| `SquareSplitVertical` | Square split vertical |
| `Table` | Table, data grid, spreadsheet |
| `Table2` | Table alternate |
| `TableCellsMerge` | Table cells merge |
| `TableCellsSplit` | Table cells split |
| `TableColumnsSplit` | Table columns split |
| `TableConfig` | Table config, settings |
| `TableOfContents` | Table of contents, TOC |
| `TableProperties` | Table properties, settings |
| `TableRowsSplit` | Table rows split |
| `Kanban` | Kanban, board, agile |
| `KanbanSquare` | Kanban in square |
| `KanbanSquareDashed` | Kanban square dashed |
| `SquareKanban` | Square with kanban |
| `SquareDashedKanban` | Square dashed kanban |
| `SquareChartGantt` | Square Gantt chart |
| `SquareGanttChart` | Square Gantt chart |
| `GalleryHorizontal` | Gallery horizontal, carousel |
| `GalleryHorizontalEnd` | Gallery horizontal end |
| `GalleryThumbnails` | Gallery thumbnails, grid |
| `GalleryVertical` | Gallery vertical, feed |
| `GalleryVerticalEnd` | Gallery vertical end |
| `AppWindow` | App window, application |
| `AppWindowMac` | App window Mac, macOS |
| `Frame` | Frame, border, container |
| `Presentation` | Presentation, slides |
| `SlidersHorizontal` | Sliders horizontal, controls |
| `SlidersVertical` | Sliders vertical, controls |
| `Sliders` | Sliders, adjustments |
| `Settings` | Settings, gear, preferences |
| `Settings2` | Settings alternate |
| `Cog` | Cog, gear, settings |
| `SeparatorHorizontal` | Separator horizontal, divider |
| `SeparatorVertical` | Separator vertical, divider |
| `BetweenHorizonalEnd` | Between horizontal end |
| `BetweenHorizonalStart` | Between horizontal start |
| `BetweenHorizontalEnd` | Between horizontal end |
| `BetweenHorizontalStart` | Between horizontal start |
| `BetweenVerticalEnd` | Between vertical end |
| `BetweenVerticalStart` | Between vertical start |
| `AlignCenter` | Align center text |
| `AlignCenterHorizontal` | Align center horizontal |
| `AlignCenterVertical` | Align center vertical |
| `AlignEndHorizontal` | Align end horizontal |
| `AlignEndVertical` | Align end vertical |
| `AlignHorizontalDistributeCenter` | Distribute center horizontal |
| `AlignHorizontalDistributeEnd` | Distribute end horizontal |
| `AlignHorizontalDistributeStart` | Distribute start horizontal |
| `AlignHorizontalJustifyCenter` | Justify center horizontal |
| `AlignHorizontalJustifyEnd` | Justify end horizontal |
| `AlignHorizontalJustifyStart` | Justify start horizontal |
| `AlignHorizontalSpaceAround` | Space around horizontal |
| `AlignHorizontalSpaceBetween` | Space between horizontal |
| `AlignJustify` | Align justify, full width |
| `AlignLeft` | Align left |
| `AlignRight` | Align right |
| `AlignStartHorizontal` | Align start horizontal |
| `AlignStartVertical` | Align start vertical |
| `AlignVerticalDistributeCenter` | Distribute center vertical |
| `AlignVerticalDistributeEnd` | Distribute end vertical |
| `AlignVerticalDistributeStart` | Distribute start vertical |
| `AlignVerticalJustifyCenter` | Justify center vertical |
| `AlignVerticalJustifyEnd` | Justify end vertical |
| `AlignVerticalJustifyStart` | Justify start vertical |
| `AlignVerticalSpaceAround` | Space around vertical |
| `AlignVerticalSpaceBetween` | Space between vertical |
| `VectorSquare` | Vector square, design |
| `Shapes` | Shapes, objects, design |
| `Layers` | Layers, stack, z-index |
| `Layers2` | Layers alternate |
| `Layers3` | Layers triple |
| `LayersPlus` | Layers add |
| `SquaresExclude` | Squares exclude, boolean |
| `SquaresIntersect` | Squares intersect, boolean |
| `SquaresSubtract` | Squares subtract, boolean |
| `SquaresUnite` | Squares unite, boolean |
| `Blend` | Blend, mix, merge |
| `Contrast` | Contrast, brightness |
| `View` | View, eye, visible |
| `MoreHorizontal` | More horizontal, ellipsis, dots |
| `MoreVertical` | More vertical, kebab menu |
| `Ellipsis` | Ellipsis, more options |
| `EllipsisVertical` | Ellipsis vertical, more |
| `SquareStack` | Square stack, layers |
| `RectangleEllipsis` | Rectangle ellipsis, password |
| `PictureInPicture` | Picture in picture, PiP |
| `PictureInPicture2` | Picture in picture alternate |

### Media and Entertainment

Playback controls, audio, video, music, and entertainment.

| Icon | Description |
|------|-------------|
| `Play` | Play, start, resume |
| `PlayCircle` | Play circle, play button |
| `PlaySquare` | Play square |
| `CirclePlay` | Circle play |
| `SquarePlay` | Square play |
| `Pause` | Pause, hold, suspend |
| `PauseCircle` | Pause circle |
| `PauseOctagon` | Pause octagon |
| `CirclePause` | Circle pause |
| `SquarePause` | Square pause |
| `OctagonPause` | Octagon pause |
| `StopCircle` | Stop circle, halt |
| `CircleStop` | Circle stop |
| `SquareStop` | Square stop |
| `SkipBack` | Skip back, previous track |
| `SkipForward` | Skip forward, next track |
| `StepBack` | Step back, rewind one |
| `StepForward` | Step forward, advance one |
| `FastForward` | Fast forward, speed up |
| `Rewind` | Rewind, go back |
| `Shuffle` | Shuffle, random, mix |
| `Repeat` | Repeat, loop |
| `Repeat1` | Repeat one, loop single |
| `Repeat2` | Repeat alternate |
| `Volume` | Volume, sound, audio |
| `Volume1` | Volume low |
| `Volume2` | Volume high |
| `VolumeOff` | Volume off, silent |
| `VolumeX` | Volume mute, no sound |
| `Music` | Music, note, song |
| `Music2` | Music alternate |
| `Music3` | Music triple |
| `Music4` | Music quad |
| `Film` | Film, movie, cinema |
| `Video` | Video, camera, record |
| `VideoOff` | Video off, no camera |
| `Videotape` | Videotape, VHS, retro |
| `Clapperboard` | Clapperboard, movie, action |
| `Disc` | Disc, CD, record |
| `Disc2` | Disc alternate |
| `Disc3` | Disc triple |
| `DiscAlbum` | Disc album, music |
| `Radio` | Radio, broadcast, FM |
| `Turntable` | Turntable, vinyl, DJ |
| `Drama` | Drama, theater, masks |
| `Theater` | Theater, cinema, performance |
| `Popcorn` | Popcorn, movie snack |
| `CassetteTape` | Cassette tape, retro audio |
| `Aperture` | Aperture, camera lens, shutter |
| `Image` | Image, photo, picture |
| `Guitar` | Guitar, music, instrument |
| `Piano` | Piano, keys, music |
| `Drum` | Drum, percussion, beat |
| `Drumstick` | Drumstick, percussion |

### Nature and Weather

Sun, moon, clouds, plants, weather conditions, and natural elements.

| Icon | Description |
|------|-------------|
| `Sun` | Sun, light, day, bright |
| `SunDim` | Sun dim, low brightness |
| `SunMedium` | Sun medium brightness |
| `SunMoon` | Sun moon, theme toggle |
| `SunSnow` | Sun snow, mixed weather |
| `Sunrise` | Sunrise, morning, dawn |
| `Sunset` | Sunset, evening, dusk |
| `Moon` | Moon, night, dark mode |
| `MoonStar` | Moon star, night |
| `Eclipse` | Eclipse, sun moon |
| `Cloud` | Cloud, weather, sky |
| `CloudAlert` | Cloud alert, warning |
| `CloudBackup` | Cloud backup, sync |
| `CloudCheck` | Cloud check, synced |
| `CloudCog` | Cloud settings |
| `CloudDownload` | Cloud download |
| `CloudDrizzle` | Cloud drizzle, light rain |
| `CloudFog` | Cloud fog, mist, haze |
| `CloudHail` | Cloud hail, ice |
| `CloudLightning` | Cloud lightning, storm |
| `CloudMoon` | Cloud moon, night |
| `CloudMoonRain` | Cloud moon rain, night rain |
| `CloudOff` | Cloud off, offline |
| `CloudRain` | Cloud rain, rainy |
| `CloudRainWind` | Cloud rain wind, storm |
| `CloudSnow` | Cloud snow, snowy |
| `CloudSun` | Cloud sun, partly cloudy |
| `CloudSunRain` | Cloud sun rain, mixed |
| `CloudSync` | Cloud sync, synchronize |
| `CloudUpload` | Cloud upload |
| `Cloudy` | Cloudy, overcast |
| `Wind` | Wind, breeze, air |
| `WindArrowDown` | Wind arrow down |
| `Haze` | Haze, fog, smog |
| `Tornado` | Tornado, cyclone, storm |
| `Snowflake` | Snowflake, cold, winter |
| `Rainbow` | Rainbow, colorful, arc |
| `Waves` | Waves, water, ocean |
| `WavesArrowDown` | Waves arrow down |
| `WavesArrowUp` | Waves arrow up |
| `WavesLadder` | Waves ladder, pool |
| `Droplet` | Droplet, water, rain |
| `DropletOff` | Droplet off, no water |
| `Droplets` | Droplets, rain, water |
| `Flame` | Flame, fire, hot |
| `FlameKindling` | Flame kindling, campfire |
| `Thermometer` | Thermometer, temperature |
| `ThermometerSnowflake` | Thermometer cold, freezing |
| `ThermometerSun` | Thermometer hot, heat |
| `Leaf` | Leaf, nature, plant, eco |
| `LeafyGreen` | Leafy green, vegetable |
| `Tree` | Tree, forest, nature |
| `TreeDeciduous` | Deciduous tree, oak |
| `TreePalm` | Palm tree, tropical |
| `TreePine` | Pine tree, evergreen |
| `Trees` | Trees, forest, woods |
| `Palmtree` | Palm tree, beach |
| `Flower` | Flower, bloom, nature |
| `Flower2` | Flower alternate |
| `Rose` | Rose, flower, romantic |
| `Sprout` | Sprout, seedling, growth |
| `Shrub` | Shrub, bush, plant |
| `Clover` | Clover, lucky, shamrock |
| `Cannabis` | Cannabis, hemp, leaf |
| `CannabisOff` | Cannabis off, no hemp |
| `Mountain` | Mountain, hill, peak |
| `MountainSnow` | Mountain snow, winter |
| `Earth` | Earth, globe, world, planet |
| `EarthLock` | Earth lock, geo-restricted |
| `Globe` | Globe, world, international |
| `Globe2` | Globe alternate |
| `GlobeLock` | Globe lock, restricted |
| `Feather` | Feather, light, quill |
| `Shell` | Shell, sea, beach |
| `Stone` | Stone, rock, pebble |
| `Citrus` | Citrus, lemon, orange |

### People and Identity

Users, contacts, people, identity, and human figures.

| Icon | Description |
|------|-------------|
| `User` | User, person, profile |
| `User2` | User alternate |
| `UserCheck` | User check, verified |
| `UserCheck2` | User check alternate |
| `UserCircle` | User circle, avatar |
| `UserCircle2` | User circle alternate |
| `UserCog` | User settings, preferences |
| `UserCog2` | User settings alternate |
| `UserLock` | User lock, restricted |
| `UserMinus` | User minus, remove user |
| `UserMinus2` | User minus alternate |
| `UserPen` | User pen, edit profile |
| `UserPlus` | User plus, add user |
| `UserPlus2` | User plus alternate |
| `UserRound` | User round, avatar |
| `UserRoundCheck` | User round check |
| `UserRoundCog` | User round settings |
| `UserRoundMinus` | User round minus |
| `UserRoundPen` | User round pen, edit |
| `UserRoundPlus` | User round plus |
| `UserRoundSearch` | User round search |
| `UserRoundX` | User round X, remove |
| `UserSearch` | User search, find user |
| `UserSquare` | User square, avatar |
| `UserSquare2` | User square alternate |
| `UserStar` | User star, favorite |
| `UserX` | User X, remove user |
| `UserX2` | User X alternate |
| `Users` | Users, group, team |
| `Users2` | Users alternate |
| `UsersRound` | Users round, team |
| `CircleUser` | Circle user, avatar |
| `CircleUserRound` | Circle user round |
| `SquareUser` | Square user, avatar |
| `SquareUserRound` | Square user round |
| `Contact` | Contact, address book |
| `Contact2` | Contact alternate |
| `ContactRound` | Contact round |
| `Baby` | Baby, infant, child |
| `PersonStanding` | Person standing, human |
| `BicepsFlexed` | Biceps flexed, strong, muscle |
| `Fingerprint` | Fingerprint, biometric, identity |
| `FingerprintPattern` | Fingerprint pattern |
| `IdCard` | ID card, identity, badge |
| `IdCardLanyard` | ID card lanyard, badge |
| `GraduationCap` | Graduation cap, education |
| `Accessibility` | Accessibility, a11y, disability |
| `HandHelping` | Helping hand, assist |
| `HelpingHand` | Helping hand, support |
| `HandHeart` | Hand heart, care, donate |
| `HandCoins` | Hand coins, donate, pay |
| `HandMetal` | Hand metal, rock, horns |
| `HandPlatter` | Hand platter, serve |
| `Handbag` | Handbag, purse, bag |
| `Footprints` | Footprints, steps, tracking |
| `Ear` | Ear, listen, hearing |
| `EarOff` | Ear off, deaf, no hearing |
| `Smile` | Smile, happy, smiley |
| `SmilePlus` | Smile plus, add reaction |
| `Frown` | Frown, sad, unhappy |
| `Meh` | Meh, neutral, indifferent |
| `Angry` | Angry, mad, upset |
| `Annoyed` | Annoyed, irritated |
| `Laugh` | Laugh, happy, LOL |
| `Glasses` | Glasses, spectacles, vision |
| `HatGlasses` | Hat glasses, disguise |
| `Handshake` | Handshake, deal, agreement |
| `NonBinary` | Non-binary, gender |
| `Mars` | Mars, male symbol |
| `MarsStroke` | Mars stroke, male |
| `Venus` | Venus, female symbol |
| `VenusAndMars` | Venus and Mars, gender |
| `Transgender` | Transgender, gender identity |

### Security and Access

Locks, shields, keys, authentication, and permissions.

| Icon | Description |
|------|-------------|
| `Lock` | Lock, secure, private |
| `LockKeyhole` | Lock keyhole, secured |
| `LockKeyholeOpen` | Lock keyhole open |
| `LockOpen` | Lock open, unlocked |
| `Unlock` | Unlock, open access |
| `UnlockKeyhole` | Unlock keyhole |
| `Shield` | Shield, security, protect |
| `ShieldAlert` | Shield alert, warning |
| `ShieldBan` | Shield ban, blocked |
| `ShieldCheck` | Shield check, verified |
| `ShieldClose` | Shield close |
| `ShieldEllipsis` | Shield ellipsis, processing |
| `ShieldHalf` | Shield half, partial |
| `ShieldMinus` | Shield minus, remove |
| `ShieldOff` | Shield off, unprotected |
| `ShieldPlus` | Shield plus, add |
| `ShieldQuestion` | Shield question, unknown |
| `ShieldQuestionMark` | Shield question mark |
| `ShieldUser` | Shield user, protected |
| `ShieldX` | Shield X, insecure |
| `Key` | Key, access, credential |
| `KeyRound` | Key round |
| `KeySquare` | Key square |
| `Eye` | Eye, view, visible, show |
| `EyeClosed` | Eye closed, hidden |
| `EyeOff` | Eye off, invisible, hide |
| `LogIn` | Log in, sign in, enter |
| `LogOut` | Log out, sign out, exit |
| `Verified` | Verified, certified, authentic |
| `Vault` | Vault, safe, secure storage |

### Shopping and Finance

Shopping, payments, currency, receipts, and financial operations.

| Icon | Description |
|------|-------------|
| `ShoppingCart` | Shopping cart, basket, buy |
| `ShoppingBag` | Shopping bag, purchase |
| `ShoppingBasket` | Shopping basket, grocery |
| `CreditCard` | Credit card, payment, card |
| `Wallet` | Wallet, payment, balance |
| `Wallet2` | Wallet alternate |
| `WalletCards` | Wallet cards, payment methods |
| `WalletMinimal` | Wallet minimal |
| `DollarSign` | Dollar sign, USD, money |
| `CircleDollarSign` | Circle dollar sign |
| `Euro` | Euro, EUR, currency |
| `PoundSterling` | Pound sterling, GBP |
| `CirclePoundSterling` | Circle pound sterling |
| `JapaneseYen` | Japanese yen, JPY |
| `IndianRupee` | Indian rupee, INR |
| `RussianRuble` | Russian ruble, RUB |
| `SwissFranc` | Swiss franc, CHF |
| `TurkishLira` | Turkish lira, TRY |
| `PhilippinePeso` | Philippine peso, PHP |
| `SaudiRiyal` | Saudi riyal, SAR |
| `GeorgianLari` | Georgian lari, GEL |
| `Bitcoin` | Bitcoin, BTC, crypto |
| `Currency` | Currency, money, exchange |
| `Banknote` | Banknote, cash, money |
| `BanknoteArrowDown` | Banknote arrow down, expense |
| `BanknoteArrowUp` | Banknote arrow up, income |
| `BanknoteX` | Banknote X, no cash |
| `Receipt` | Receipt, invoice, bill |
| `ReceiptCent` | Receipt cent |
| `ReceiptEuro` | Receipt euro |
| `ReceiptIndianRupee` | Receipt Indian rupee |
| `ReceiptJapaneseYen` | Receipt Japanese yen |
| `ReceiptPoundSterling` | Receipt pound sterling |
| `ReceiptRussianRuble` | Receipt Russian ruble |
| `ReceiptSwissFranc` | Receipt Swiss franc |
| `ReceiptText` | Receipt text, invoice |
| `ReceiptTurkishLira` | Receipt Turkish lira |
| `Coins` | Coins, money, currency |
| `PiggyBank` | Piggy bank, savings |
| `BadgeDollarSign` | Badge dollar, price |
| `BadgeCent` | Badge cent, price |
| `BadgeEuro` | Badge euro, price |
| `BadgeIndianRupee` | Badge Indian rupee |
| `BadgeJapaneseYen` | Badge Japanese yen |
| `BadgePoundSterling` | Badge pound sterling |
| `BadgeRussianRuble` | Badge Russian ruble |
| `BadgeSwissFranc` | Badge Swiss franc |
| `BadgeTurkishLira` | Badge Turkish lira |
| `BadgePercent` | Badge percent, discount |
| `Store` | Store, shop, retail |
| `Barcode` | Barcode, product, scan |
| `Ticket` | Ticket, coupon, pass |
| `TicketCheck` | Ticket check, valid |
| `TicketMinus` | Ticket minus, remove |
| `TicketPercent` | Ticket percent, discount |
| `TicketPlus` | Ticket plus, add |
| `TicketSlash` | Ticket slash, invalid |
| `TicketX` | Ticket X, cancel |
| `Tickets` | Tickets, multiple passes |
| `TicketsPlane` | Tickets plane, boarding pass |
| `Scale` | Scale, weigh, balance |
| `Gem` | Gem, diamond, premium, jewel |
| `Gift` | Gift, present, reward |
| `Package` | Package, box, delivery |
| `Package2` | Package alternate |
| `PackageCheck` | Package check, delivered |
| `PackageMinus` | Package minus, remove |
| `PackageOpen` | Package open, unbox |
| `PackagePlus` | Package plus, add |
| `PackageSearch` | Package search, track |
| `PackageX` | Package X, cancel |
| `Box` | Box, container, package |
| `Boxes` | Boxes, inventory, stock |

### Shapes and Geometry

Geometric shapes, symbols, and abstract forms.

| Icon | Description |
|------|-------------|
| `Circle` | Circle, round, dot |
| `CircleDashed` | Circle dashed, loading |
| `CircleDot` | Circle dot, radio |
| `CircleDotDashed` | Circle dot dashed |
| `CircleEllipsis` | Circle ellipsis, more |
| `CircleFadingPlus` | Circle fading plus |
| `CircleMinus` | Circle minus, remove |
| `CircleOff` | Circle off |
| `CirclePile` | Circle pile, stack |
| `CirclePlus` | Circle plus, add |
| `CircleDivide` | Circle divide, split |
| `CircleEqual` | Circle equal, same |
| `CircleSlash` | Circle slash |
| `CircleSlash2` | Circle slash alternate |
| `CircleSlashed` | Circle slashed |
| `CircleSmall` | Circle small, bullet |
| `CircleX` | Circle X, close, remove |
| `Square` | Square, box, rectangle |
| `SquareDashed` | Square dashed, selection |
| `SquareDashedBottom` | Square dashed bottom |
| `SquareDashedBottomCode` | Square dashed bottom code |
| `SquareDashedTopSolid` | Square dashed top solid |
| `SquareDot` | Square dot, button |
| `SquareMinus` | Square minus, remove |
| `SquarePlus` | Square plus, add |
| `SquareSlash` | Square slash |
| `SquareSquare` | Square in square, nested |
| `SquareX` | Square X, close |
| `SquareRoundCorner` | Square round corner |
| `Squircle` | Squircle, rounded square |
| `SquircleDashed` | Squircle dashed |
| `Triangle` | Triangle, shape |
| `TriangleDashed` | Triangle dashed |
| `TriangleRight` | Triangle right, play |
| `Diamond` | Diamond, rhombus, gem |
| `DiamondMinus` | Diamond minus |
| `DiamondPercent` | Diamond percent |
| `DiamondPlus` | Diamond plus |
| `PercentDiamond` | Percent diamond |
| `Star` | Star, favorite, rating |
| `StarHalf` | Star half, half rating |
| `StarOff` | Star off, unrated |
| `Stars` | Stars, multiple, sparkle |
| `CircleStar` | Circle star |
| `SquareStar` | Square star |
| `Heart` | Heart, love, like, favorite |
| `HeartCrack` | Heart crack, heartbreak |
| `HeartHandshake` | Heart handshake, trust |
| `HeartMinus` | Heart minus, unlike |
| `HeartOff` | Heart off, no love |
| `HeartPlus` | Heart plus, like |
| `Hexagon` | Hexagon, shape |
| `Pentagon` | Pentagon, shape |
| `Octagon` | Octagon, stop shape |
| `OctagonMinus` | Octagon minus |
| `OctagonX` | Octagon X |
| `RectangleHorizontal` | Rectangle horizontal |
| `RectangleVertical` | Rectangle vertical |
| `RectangleCircle` | Rectangle with circle |
| `RectangleGoggles` | Rectangle goggles, VR |
| `Cuboid` | Cuboid, 3D box |
| `Cylinder` | Cylinder, 3D shape |
| `Cone` | Cone, 3D shape |
| `Pyramid` | Pyramid, 3D triangle |
| `Torus` | Torus, donut shape |
| `Spline` | Spline, curve, path |
| `SplinePointer` | Spline pointer, bezier |
| `Dot` | Dot, point, period |
| `DotSquare` | Dot in square |
| `Tangent` | Tangent, geometry, line |
| `Diameter` | Diameter, circle measure |
| `Radius` | Radius, circle, distance |
| `Lollipop` | Lollipop, circle on stick |
| `Crosshair` | Crosshair, aim, center |
| `Cross` | Cross, plus, medical |
| `Asterisk` | Asterisk, star, required |
| `Hash` | Hash, number sign |

### Text and Typography

Text formatting, alignment, headings, and typography controls.

| Icon | Description |
|------|-------------|
| `Type` | Type, text, font, typography |
| `TypeOutline` | Type outline, text style |
| `Bold` | Bold, strong, weight |
| `Italic` | Italic, emphasis, slant |
| `Underline` | Underline, text decoration |
| `Strikethrough` | Strikethrough, deleted text |
| `Heading` | Heading, title, H tag |
| `Heading1` | Heading 1, H1, title |
| `Heading2` | Heading 2, H2, subtitle |
| `Heading3` | Heading 3, H3 |
| `Heading4` | Heading 4, H4 |
| `Heading5` | Heading 5, H5 |
| `Heading6` | Heading 6, H6 |
| `Text` | Text, paragraph, content |
| `TextAlignCenter` | Text align center |
| `TextAlignEnd` | Text align end |
| `TextAlignJustify` | Text align justify |
| `TextAlignStart` | Text align start |
| `TextCursor` | Text cursor, caret |
| `TextCursorInput` | Text cursor input, field |
| `TextInitial` | Text initial, drop cap |
| `TextSearch` | Text search, find text |
| `TextSelect` | Text select, highlight |
| `TextSelection` | Text selection, range |
| `TextWrap` | Text wrap, line break |
| `Subscript` | Subscript, sub text |
| `Superscript` | Superscript, sup text |
| `Pilcrow` | Pilcrow, paragraph mark |
| `PilcrowLeft` | Pilcrow left |
| `PilcrowRight` | Pilcrow right |
| `PilcrowSquare` | Pilcrow in square |
| `SquarePilcrow` | Square with pilcrow |
| `CaseLower` | Case lower, lowercase |
| `CaseUpper` | Case upper, UPPERCASE |
| `CaseSensitive` | Case sensitive, match case |
| `Baseline` | Baseline, text alignment |
| `Ligature` | Ligature, connected letters |
| `LetterText` | Letter text, typography |
| `RemoveFormatting` | Remove formatting, clear style |
| `WrapText` | Wrap text, line wrap |
| `WholeWord` | Whole word, match word |
| `SpellCheck` | Spell check, grammar |
| `SpellCheck2` | Spell check alternate |
| `Highlighter` | Highlighter, marker, highlight |
| `AArrowDown` | A arrow down, font decrease |
| `AArrowUp` | A arrow up, font increase |
| `ALargeSmall` | A large small, font size |
| `Signature` | Signature, sign, autograph |
| `Section` | Section, paragraph, break |
| `LineSquiggle` | Line squiggle, underline wavy |
| `Logs` | Logs, text lines, output |
| `ClosedCaption` | Closed caption, CC, subtitles |

### Time and Calendar

Clocks, timers, calendars, scheduling, and time management.

| Icon | Description |
|------|-------------|
| `Clock` | Clock, time, watch |
| `Clock1` | Clock 1 o'clock |
| `Clock2` | Clock 2 o'clock |
| `Clock3` | Clock 3 o'clock |
| `Clock4` | Clock 4 o'clock |
| `Clock5` | Clock 5 o'clock |
| `Clock6` | Clock 6 o'clock |
| `Clock7` | Clock 7 o'clock |
| `Clock8` | Clock 8 o'clock |
| `Clock9` | Clock 9 o'clock |
| `Clock10` | Clock 10 o'clock |
| `Clock11` | Clock 11 o'clock |
| `Clock12` | Clock 12 o'clock |
| `ClockAlert` | Clock alert, time warning |
| `ClockArrowDown` | Clock arrow down |
| `ClockArrowUp` | Clock arrow up |
| `ClockCheck` | Clock check, time confirmed |
| `ClockFading` | Clock fading, expiring |
| `ClockPlus` | Clock plus, add time |
| `Calendar` | Calendar, date, schedule |
| `Calendar1` | Calendar day 1 |
| `CalendarArrowDown` | Calendar arrow down |
| `CalendarArrowUp` | Calendar arrow up |
| `CalendarCheck` | Calendar check, booked |
| `CalendarCheck2` | Calendar check alternate |
| `CalendarClock` | Calendar clock, schedule time |
| `CalendarCog` | Calendar settings |
| `CalendarDays` | Calendar days, month view |
| `CalendarFold` | Calendar fold |
| `CalendarHeart` | Calendar heart, anniversary |
| `CalendarMinus` | Calendar minus, remove event |
| `CalendarMinus2` | Calendar minus alternate |
| `CalendarOff` | Calendar off, no events |
| `CalendarPlus` | Calendar plus, add event |
| `CalendarPlus2` | Calendar plus alternate |
| `CalendarRange` | Calendar range, date range |
| `CalendarSearch` | Calendar search, find event |
| `CalendarSync` | Calendar sync |
| `CalendarX` | Calendar X, cancel event |
| `CalendarX2` | Calendar X alternate |
| `Calendars` | Calendars, multiple |
| `Timer` | Timer, countdown, stopwatch |
| `TimerOff` | Timer off |
| `TimerReset` | Timer reset, restart |
| `Hourglass` | Hourglass, waiting, loading |
| `History` | History, past, timeline |
| `AlarmClock` | Alarm clock, wake up |
| `AlarmClockCheck` | Alarm clock check |
| `AlarmClockMinus` | Alarm clock minus |
| `AlarmClockOff` | Alarm clock off |
| `AlarmClockPlus` | Alarm clock plus |
| `AlarmCheck` | Alarm check |
| `AlarmMinus` | Alarm minus |
| `AlarmPlus` | Alarm plus |
| `Watch` | Watch, wristwatch, time |
| `Stopwatch` | Stopwatch, timer, lap |

### Travel and Transport

Vehicles, maps, navigation, routes, and travel essentials.

| Icon | Description |
|------|-------------|
| `Car` | Car, auto, vehicle |
| `CarFront` | Car front view |
| `CarTaxiFront` | Taxi front, cab |
| `Caravan` | Caravan, RV, trailer |
| `Plane` | Plane, flight, airplane |
| `PlaneLanding` | Plane landing, arrival |
| `PlaneTakeoff` | Plane takeoff, departure |
| `Train` | Train, railway, transit |
| `TrainFront` | Train front view |
| `TrainFrontTunnel` | Train front tunnel |
| `TrainTrack` | Train track, railway |
| `TramFront` | Tram front, streetcar |
| `Bus` | Bus, transit, coach |
| `BusFront` | Bus front view |
| `Ship` | Ship, boat, vessel |
| `ShipWheel` | Ship wheel, helm, nautical |
| `Sailboat` | Sailboat, yacht, sail |
| `Kayak` | Kayak, canoe, paddle |
| `Bike` | Bike, bicycle, cycle |
| `Motorbike` | Motorbike, motorcycle |
| `Scooter` | Scooter, kick scooter |
| `Truck` | Truck, delivery, freight |
| `TruckElectric` | Truck electric, EV |
| `Van` | Van, minivan, vehicle |
| `Ambulance` | Ambulance, emergency vehicle |
| `Helicopter` | Helicopter, chopper |
| `Rocket` | Rocket, launch, fast, space |
| `CableCar` | Cable car, gondola, ski |
| `Forklift` | Forklift, warehouse, lift |
| `Tractor` | Tractor, farm, agriculture |
| `Fuel` | Fuel, gas, petrol |
| `Map` | Map, navigation, directions |
| `MapMinus` | Map minus, remove |
| `MapPlus` | Map plus, add |
| `MapPinned` | Map pinned, location set |
| `MapPin` | Map pin, location, marker |
| `MapPinCheck` | Map pin check, confirmed |
| `MapPinCheckInside` | Map pin check inside |
| `MapPinHouse` | Map pin house, home location |
| `MapPinMinus` | Map pin minus, remove |
| `MapPinMinusInside` | Map pin minus inside |
| `MapPinOff` | Map pin off, no location |
| `MapPinPen` | Map pin pen, edit location |
| `MapPinPlus` | Map pin plus, add location |
| `MapPinPlusInside` | Map pin plus inside |
| `MapPinX` | Map pin X, remove location |
| `MapPinXInside` | Map pin X inside |
| `Route` | Route, path, directions |
| `RouteOff` | Route off, no route |
| `Compass` | Compass, direction, navigate |
| `Navigation` | Navigation, arrow, GPS |
| `Navigation2` | Navigation alternate |
| `Navigation2Off` | Navigation 2 off |
| `NavigationOff` | Navigation off |
| `Signpost` | Signpost, direction sign |
| `SignpostBig` | Signpost big |
| `Luggage` | Luggage, suitcase, travel |
| `BaggageClaim` | Baggage claim, airport |
| `Milestone` | Milestone, progress, marker |
| `TrafficCone` | Traffic cone, construction |
| `LandPlot` | Land plot, terrain, area |
| `RailSymbol` | Rail symbol, train |
| `ParkingCircle` | Parking circle |
| `ParkingCircleOff` | Parking circle off |
| `ParkingMeter` | Parking meter |
| `ParkingSquare` | Parking square |
| `ParkingSquareOff` | Parking square off |
| `CircleParking` | Circle parking |
| `CircleParkingOff` | Circle parking off |
| `SquareParking` | Square parking |
| `SquareParkingOff` | Square parking off |

### Buildings and Places

Homes, buildings, institutions, and places.

| Icon | Description |
|------|-------------|
| `Home` | Home, house, main page |
| `House` | House, home, dwelling |
| `HouseHeart` | House heart, favorite home |
| `HousePlug` | House plug, smart home |
| `HousePlus` | House plus, add property |
| `HouseWifi` | House WiFi, smart home |
| `Building` | Building, office, company |
| `Building2` | Building alternate, corporate |
| `Hospital` | Hospital, medical, health |
| `Hotel` | Hotel, accommodation, stay |
| `Church` | Church, worship, religion |
| `Castle` | Castle, fortress, medieval |
| `School` | School, education, learn |
| `School2` | School alternate |
| `University` | University, college, campus |
| `Factory` | Factory, industrial, manufacturing |
| `Warehouse` | Warehouse, storage, depot |
| `Landmark` | Landmark, monument, place |
| `Tent` | Tent, camping, outdoor |
| `TentTree` | Tent with tree, camping |
| `Construction` | Construction, building, WIP |
| `Dam` | Dam, water, reservoir |
| `BrickWall` | Brick wall, barrier |
| `BrickWallFire` | Brick wall fire, firewall |
| `BrickWallShield` | Brick wall shield, security |
| `Fence` | Fence, barrier, boundary |
| `Lighthouse` | Lighthouse, beacon, coast |
| `Lectern` | Lectern, podium, speak |
| `DoorClosed` | Door closed, entry |
| `DoorClosedLocked` | Door closed locked, secure |
| `DoorOpen` | Door open, enter, exit |
| `Bed` | Bed, sleep, hotel room |
| `BedDouble` | Bed double, couple |
| `BedSingle` | Bed single, room |
| `Bath` | Bath, bathtub, bathroom |
| `ShowerHead` | Shower head, bathroom |
| `Toilet` | Toilet, restroom, WC |
| `Sofa` | Sofa, couch, living room |
| `Armchair` | Armchair, seat, chair |
| `RockingChair` | Rocking chair, relax |
| `Lamp` | Lamp, light, desk |
| `LampCeiling` | Lamp ceiling, light |
| `LampDesk` | Lamp desk, study light |
| `LampFloor` | Lamp floor, standing |
| `LampWallDown` | Lamp wall down, sconce |
| `LampWallUp` | Lamp wall up, sconce |
| `Lightbulb` | Lightbulb, idea, light |
| `LightbulbOff` | Lightbulb off, no idea |
| `Heater` | Heater, warm, radiator |
| `AirVent` | Air vent, HVAC, cooling |
| `Fan` | Fan, cooling, ventilator |
| `Refrigerator` | Refrigerator, fridge, cold |
| `WashingMachine` | Washing machine, laundry |
| `Microwave` | Microwave, kitchen appliance |
| `CookingPot` | Cooking pot, kitchen |
| `Blinds` | Blinds, window cover |
| `Wallpaper` | Wallpaper, background, decor |
| `UtilityPole` | Utility pole, power line |
| `TowerControl` | Tower control, ATC |

### Food and Drink

Food items, beverages, cooking, and dining.

| Icon | Description |
|------|-------------|
| `Coffee` | Coffee, cup, cafe, espresso |
| `Wine` | Wine, glass, drink |
| `WineOff` | Wine off, no alcohol |
| `Beer` | Beer, pint, brew |
| `BeerOff` | Beer off, no alcohol |
| `Martini` | Martini, cocktail, drink |
| `CupSoda` | Cup soda, soft drink |
| `Milk` | Milk, dairy, drink |
| `MilkOff` | Milk off, dairy-free |
| `Pizza` | Pizza, slice, food |
| `Sandwich` | Sandwich, sub, lunch |
| `Hamburger` | Hamburger, burger, fast food |
| `Salad` | Salad, healthy, greens |
| `Soup` | Soup, bowl, broth |
| `Beef` | Beef, steak, meat |
| `Ham` | Ham, pork, meat |
| `Drumstick` | Drumstick, chicken leg |
| `Shrimp` | Shrimp, prawn, seafood |
| `Egg` | Egg, breakfast |
| `EggFried` | Egg fried, breakfast |
| `EggOff` | Egg off, egg-free |
| `Banana` | Banana, fruit |
| `Apple` | Apple, fruit |
| `Cherry` | Cherry, fruit, berries |
| `Grape` | Grape, fruit, wine |
| `Citrus` | Citrus, lemon, orange |
| `Carrot` | Carrot, vegetable |
| `Croissant` | Croissant, pastry, bakery |
| `Cookie` | Cookie, biscuit, treat |
| `Cake` | Cake, birthday, dessert |
| `CakeSlice` | Cake slice, piece |
| `Donut` | Donut, doughnut, sweet |
| `Dessert` | Dessert, sweet, treat |
| `IceCream` | Ice cream, frozen treat |
| `IceCream2` | Ice cream alternate |
| `IceCreamBowl` | Ice cream bowl |
| `IceCreamCone` | Ice cream cone |
| `Popsicle` | Popsicle, ice pop |
| `Candy` | Candy, sweet, confection |
| `CandyCane` | Candy cane, Christmas |
| `CandyOff` | Candy off, no sweets |
| `Lollipop` | Lollipop, sweet on stick |
| `Wheat` | Wheat, grain, bread |
| `WheatOff` | Wheat off, gluten-free |
| `Bean` | Bean, legume, coffee |
| `BeanOff` | Bean off |
| `Utensils` | Utensils, fork knife, dining |
| `UtensilsCrossed` | Utensils crossed, restaurant |
| `ForkKnife` | Fork knife, dining |
| `ForkKnifeCrossed` | Fork knife crossed, restaurant |
| `ChefHat` | Chef hat, cook, kitchen |
| `Vegan` | Vegan, plant-based, leaf |
| `BottleWine` | Bottle wine |
| `Barrel` | Barrel, keg, storage |

### Health and Wellness

Medical, health, fitness, and wellness related icons.

| Icon | Description |
|------|-------------|
| `HeartPulse` | Heart pulse, health, vitals |
| `Stethoscope` | Stethoscope, doctor, medical |
| `Pill` | Pill, medicine, drug |
| `PillBottle` | Pill bottle, medication |
| `Tablets` | Tablets, pills, medication |
| `Syringe` | Syringe, injection, vaccine |
| `Bandage` | Bandage, wound, first aid |
| `Cross` | Cross, medical, first aid |
| `Dna` | DNA, genetics, helix |
| `DnaOff` | DNA off |
| `TestTube` | Test tube, lab, experiment |
| `TestTube2` | Test tube alternate |
| `TestTubeDiagonal` | Test tube diagonal |
| `TestTubes` | Test tubes, laboratory |
| `Microscope` | Microscope, research, lab |
| `Brain` | Brain, mind, intelligence |
| `BrainCircuit` | Brain circuit, AI, neural |
| `BrainCog` | Brain cog, cognitive, think |
| `FlaskConical` | Flask conical, chemistry |
| `FlaskConicalOff` | Flask off, no experiment |
| `FlaskRound` | Flask round, chemistry |
| `Beaker` | Beaker, lab, experiment |
| `Biohazard` | Biohazard, danger, toxic |
| `Radiation` | Radiation, nuclear, hazard |
| `Bone` | Bone, skeleton, orthopedic |
| `Dumbbell` | Dumbbell, exercise, gym |
| `Weight` | Weight, heavy, mass |
| `WeightTilde` | Weight approximate |
| `LifeBuoy` | Life buoy, safety, rescue |
| `FireExtinguisher` | Fire extinguisher, safety |
| `AlarmSmoke` | Alarm smoke, smoke detector |
| `HardHat` | Hard hat, safety helmet |

### Tools and Construction

Hand tools, construction, painting, design tools, and crafting.

| Icon | Description |
|------|-------------|
| `Wrench` | Wrench, spanner, fix, repair |
| `Hammer` | Hammer, build, construct |
| `Ruler` | Ruler, measure, length |
| `RulerDimensionLine` | Ruler dimension, measure |
| `PaintBucket` | Paint bucket, fill color |
| `PaintRoller` | Paint roller, wall paint |
| `Paintbrush` | Paintbrush, paint, art |
| `Paintbrush2` | Paintbrush alternate |
| `PaintbrushVertical` | Paintbrush vertical |
| `Brush` | Brush, paint, clean |
| `BrushCleaning` | Brush cleaning, sweep |
| `Eraser` | Eraser, delete, clean |
| `Palette` | Palette, color, art |
| `SwatchBook` | Swatch book, color samples |
| `Drill` | Drill, power tool |
| `Axe` | Axe, chop, lumber |
| `Pickaxe` | Pickaxe, mine, dig |
| `Shovel` | Shovel, dig, garden |
| `Gavel` | Gavel, judge, law, hammer |
| `Anvil` | Anvil, forge, blacksmith |
| `Bolt` | Bolt, screw, fastener |
| `Nut` | Nut, fastener, hardware |
| `NutOff` | Nut off, removed |
| `ToolCase` | Tool case, toolbox |
| `Toolbox` | Toolbox, tools, kit |
| `Flashlight` | Flashlight, torch, light |
| `FlashlightOff` | Flashlight off |
| `SprayCan` | Spray can, paint, graffiti |
| `Spool` | Spool, thread, sewing |
| `DraftingCompass` | Drafting compass, draw circle |
| `Calculator` | Calculator, math, compute |
| `Proportions` | Proportions, ratio, measure |
| `Spotlight` | Spotlight, focus, highlight |

### Social and Brands

Social media, brand logos, and platform icons.

| Icon | Description |
|------|-------------|
| `Github` | GitHub, code repository |
| `Gitlab` | GitLab, code repository |
| `Twitter` | Twitter, X, social media |
| `Facebook` | Facebook, social media |
| `Instagram` | Instagram, photos, social |
| `Youtube` | YouTube, video, streaming |
| `Linkedin` | LinkedIn, professional network |
| `Slack` | Slack, team chat, workspace |
| `Twitch` | Twitch, live streaming, gaming |
| `Chrome` | Chrome, browser, Google |
| `Chromium` | Chromium, browser, open source |
| `Figma` | Figma, design tool |
| `Dribbble` | Dribbble, design community |
| `Codepen` | CodePen, code playground |
| `Codesandbox` | CodeSandbox, code playground |
| `Trello` | Trello, project board |
| `Framer` | Framer, design, prototype |
| `Copyleft` | Copyleft, open source |
| `Copyright` | Copyright, rights reserved |
| `CreativeCommons` | Creative Commons, CC license |

### Status and Alerts

Alerts, warnings, information, help, and status indicators.

| Icon | Description |
|------|-------------|
| `AlertCircle` | Alert circle, warning, attention |
| `AlertOctagon` | Alert octagon, stop warning |
| `AlertTriangle` | Alert triangle, caution, warning |
| `CircleAlert` | Circle alert, warning |
| `TriangleAlert` | Triangle alert, danger |
| `OctagonAlert` | Octagon alert, critical |
| `Info` | Info, information, details |
| `CircleHelp` | Circle help, question |
| `HelpCircle` | Help circle, FAQ |
| `CircleQuestionMark` | Circle question mark |
| `Badge` | Badge, label, status |
| `BadgeAlert` | Badge alert, warning |
| `BadgeHelp` | Badge help, question |
| `BadgeInfo` | Badge info, details |
| `BadgeCheck` | Badge check, verified |
| `BadgeMinus` | Badge minus, remove |
| `BadgePlus` | Badge plus, add |
| `BadgeQuestionMark` | Badge question mark |
| `BadgeX` | Badge X, error |
| `ShieldAlert` | Shield alert, security warning |
| `Siren` | Siren, alarm, emergency |
| `CheckCircle` | Check circle, success, done |
| `CheckCircle2` | Check circle alternate |
| `CircleCheck` | Circle check, success |
| `CircleCheckBig` | Circle check big |
| `CheckSquare` | Check square, done |
| `CheckSquare2` | Check square alternate |
| `SquareCheck` | Square check, checkbox |
| `SquareCheckBig` | Square check big |
| `XCircle` | X circle, error, fail |
| `XOctagon` | X octagon, critical error |
| `XSquare` | X square, error |
| `MinusCircle` | Minus circle, remove |
| `MinusSquare` | Minus square, collapse |
| `PlusCircle` | Plus circle, add |
| `PlusSquare` | Plus square, expand |
| `CirclePercent` | Circle percent |
| `CirclePower` | Circle power |
| `SquarePercent` | Square percent |
| `SquarePower` | Square power |
| `ThumbsUp` | Thumbs up, like, approve |
| `ThumbsDown` | Thumbs down, dislike, reject |
| `Vibrate` | Vibrate, notification, haptic |
| `VibrateOff` | Vibrate off, silent |
| `Flag` | Flag, report, mark |
| `FlagOff` | Flag off, unflag |
| `FlagTriangleLeft` | Flag triangle left |
| `FlagTriangleRight` | Flag triangle right |
| `Hd` | HD, high definition, quality |
| `Barcode` | Barcode, scan, product |
| `QrCode` | QR code, scan, link |
| `Link` | Link, URL, chain, connect |
| `Link2` | Link alternate |
| `Link2Off` | Link off, unlink |
| `Unlink` | Unlink, disconnect, break |
| `Unlink2` | Unlink alternate |
| `ExternalLink` | External link, open new tab |
| `Share` | Share, send, distribute |
| `Share2` | Share alternate |
| `Sheet` | Sheet, spreadsheet, data |

### Miscellaneous

Everything else: animals, objects, symbols, and unique icons.

| Icon | Description |
|------|-------------|
| `Amphora` | Amphora, vase, ancient |
| `Anchor` | Anchor, maritime, link |
| `Award` | Award, achievement, prize |
| `Backpack` | Backpack, bag, school |
| `Balloon` | Balloon, party, celebration |
| `Binoculars` | Binoculars, observe, look far |
| `Bomb` | Bomb, explosive, danger |
| `BoomBox` | Boom box, stereo, music |
| `BowArrow` | Bow arrow, archery |
| `Briefcase` | Briefcase, work, business |
| `BriefcaseBusiness` | Briefcase business, corporate |
| `BriefcaseConveyorBelt` | Briefcase conveyor, delivery |
| `BriefcaseMedical` | Briefcase medical, first aid |
| `Bubbles` | Bubbles, foam, soap |
| `SoapDispenserDroplet` | Soap dispenser, wash |
| `CardSim` | Card SIM, mobile |
| `ChessBishop` | Chess bishop, game piece |
| `ChessKing` | Chess king, game piece |
| `ChessKnight` | Chess knight, game piece |
| `ChessPawn` | Chess pawn, game piece |
| `ChessQueen` | Chess queen, game piece |
| `ChessRook` | Chess rook, game piece |
| `Cigarette` | Cigarette, smoke |
| `CigaretteOff` | Cigarette off, no smoking |
| `Crown` | Crown, king, royal, premium |
| `Dice1` | Dice 1, roll |
| `Dice2` | Dice 2, roll |
| `Dice3` | Dice 3, roll |
| `Dice4` | Dice 4, roll |
| `Dice5` | Dice 5, roll |
| `Dice6` | Dice 6, roll |
| `Dices` | Dices, roll, game, random |
| `Dog` | Dog, pet, animal |
| `Cat` | Cat, pet, animal |
| `Bird` | Bird, animal, tweet |
| `Birdhouse` | Birdhouse, aviary |
| `Fish` | Fish, aquatic, seafood |
| `FishOff` | Fish off, no fish |
| `FishSymbol` | Fish symbol, ichthys |
| `FishingHook` | Fishing hook, angling |
| `Rabbit` | Rabbit, bunny, animal |
| `Squirrel` | Squirrel, animal, nature |
| `Turtle` | Turtle, slow, animal |
| `Snail` | Snail, slow, animal |
| `Worm` | Worm, bug, crawl |
| `Panda` | Panda, bear, animal |
| `Rat` | Rat, mouse, rodent |
| `PawPrint` | Paw print, animal, pet |
| `Ghost` | Ghost, spooky, Halloween |
| `Skull` | Skull, death, danger |
| `Gift` | Gift, present, reward |
| `PartyPopper` | Party popper, celebration, confetti |
| `Volleyball` | Volleyball, sport, ball |
| `Medal` | Medal, award, achievement |
| `Trophy` | Trophy, winner, champion |
| `Ribbon` | Ribbon, award, decoration |
| `Puzzle` | Puzzle, piece, solve, jigsaw |
| `Origami` | Origami, paper fold, craft |
| `ToyBrick` | Toy brick, LEGO, build |
| `Sword` | Sword, weapon, fight |
| `Swords` | Swords, battle, fight |
| `Umbrella` | Umbrella, rain, protect |
| `UmbrellaOff` | Umbrella off |
| `VenetianMask` | Venetian mask, disguise |
| `Vote` | Vote, ballot, election |
| `Dock` | Dock, docking station |
| `Spade` | Spade, card suit |
| `Club` | Club, card suit |
| `Hop` | Hop, beer hops |
| `HopOff` | Hop off, no hops |
| `RollerCoaster` | Roller coaster, amusement |
| `FerrisWheel` | Ferris wheel, amusement |
| `Pocket` | Pocket, save, readlater |
| `PocketKnife` | Pocket knife, multi-tool |
| `Shirt` | Shirt, clothing, apparel |
| `Newspaper` | Newspaper, news, press |
| `Atom` | Atom, science, nuclear |
| `Tally1` | Tally 1, count |
| `Tally2` | Tally 2, count |
| `Tally3` | Tally 3, count |
| `Tally4` | Tally 4, count |
| `Tally5` | Tally 5, count, five |
| `MSquare` | M in square |
| `SquareM` | Square with M |
| `SlashSquare` | Slash in square |
| `Form` | Form, input, fields |
| `FormInput` | Form input, text field |
| `SwitchCamera` | Switch camera, flip, front back |
| `DecimalsArrowLeft` | Decimals arrow left, number |
| `DecimalsArrowRight` | Decimals arrow right, number |
| `Shredder` | Shredder, destroy, paper |
