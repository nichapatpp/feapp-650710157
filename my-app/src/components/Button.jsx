const styles = {
  primary: 'bg-cyan-600 text-white hover:bg-cyan-700',
  danger:  'bg-red-600 text-white hover:bg-red-700',
  ghost:   'border border-slate-300 text-slate-700 hover:bg-slate-100',
};

function Button({ variant = 'primary', children }) {
  return (
    <button className={`rounded-lg px-4 py-2 font-semibold transition ${styles[variant]}`}>
      {children}
    </button>
  );
}
<div className="flex gap-3 p-6">
  <Button>บันทึก</Button>
  <Button variant="danger">ลบ</Button>
  <Button variant="ghost">ยกเลิก</Button>
</div>

export default Button;