class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
     }
 }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sumListNode:ListNode = new ListNode(0,null);
    let lastDecimal = 0;
    let total_sum;
    let ref_sumList = sumListNode;
    while(true){
        total_sum = (l1 != null && l2 != null ? l1.val + l2.val : (l1 != null ? l1.val : ( l2 != null ? l2.val : 0))) + lastDecimal;
        if(total_sum > 9){
            sumListNode.val = total_sum - 10;
            lastDecimal = 1
        }else{
            sumListNode.val = total_sum;
            lastDecimal = 0
        }

        /**
         * If both the next element are null assign null to sumListNode
         */
        if(l1?.next == null && l2?.next == null){
            sumListNode.next = null;
            break;
        }
        
        if(l1 != null){
            l1 = l1.next;
        }

        if(l2 != null){
            l2 = l2.next;
        }

        ref_sumList.next = new ListNode(0,null);
        ref_sumList = ref_sumList.next;
    }
    return sumListNode;
};