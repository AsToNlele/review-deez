import { Badge } from '@/components/ui/badge';
import { convertColor } from '@/lib/utils';
import { labelType } from '@/types/api';

function GitHubBadge({ label }: { label: labelType }) {
  if (label?.color) {
    const { rgb, hsl } = convertColor(label.color);
    return (
      <Badge
        variant="outline"
        className="m-1"
        style={{
          '--label-r': rgb.r,
          '--label-g': rgb.g,
          '--label-b': rgb.b,
          '--label-h': hsl.h,
          '--label-s': hsl.s,
          '--label-l': hsl.l,
          '--lightness-threshold': 0.6,
          '--background-alpha': 0.18,
          '--border-alpha': 0.3,
          '--lighten-by': 'calc(((var(--lightness-threshold) - var(--perceived-lightness)) * 100) * var(--lightness-switch))',
          '--perceived-lightness': 'calc( ((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255 )',
          '--lightness-switch': 'max(0, min(calc((1/(var(--lightness-threshold) - var(--perceived-lightness)))), 1))',
          color: 'hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%))',
          background: 'rgba(var(--label-r), var(--label-g), var(--label-b), var(--background-alpha))',
          borderColor: 'hsla(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%), var(--border-alpha))',
        } as React.CSSProperties}
      >
        {label.name}
      </Badge>
    );
  }
  return null;
}

export default GitHubBadge;
